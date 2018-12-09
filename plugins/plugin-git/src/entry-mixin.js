const {isMatch} = require('micromatch')
const {GLOB, PERSON, MESSAGE} = require('./const')
const {parse, compile} = require('./entry')
const {Mode} = require('@es-git/core')
const {blobToText} = require('@es-git/object-mixin')

const recursivelyMakeFile = (parent, path, hash, body) => {
  const [name, ...subPath] = path
  const {folders} = parent
  if (subPath.length === 0) {
    parent.files[name] = {
      hash,
      mode: Mode.file,
      body,
      get text() {
        return body
      },
    }
  } else {
    const folder = folders[name] || (folders[name] = {files: {}, folders: {}})
    return recursivelyMakeFile(folder, subPath, hash, body)
  }
  return parent
}

const recursivelyDeleteFile = (parent, path) => {
  const [name, ...subPath] = path
  const {folders} = parent
  if (subPath.length === 0) {
    if (!parent.files[name]) {
      // no file
      return
    }
    delete parent.files[name]
  } else if (folders[name]) {
    // child folder
    return recursivelyDeleteFile(folders[name], subPath)
  } else {
    // no folder
    return
  }
  return parent
}

async function tree(ref) {
  const hash = await this.getRef(ref)
  if (!hash) {
    throw new Error(`Can't find ${ref}`)
  }
  const commit = await this.loadCommit(hash)
  return commit.tree
}

module.exports = repo => {
  return class EntryRepo extends repo {
    async * listEntries(ref, options = {glob: GLOB}) {
      const {glob = GLOB} = options
      for await (const file of super.listFiles(await tree.call(this, ref))) {
        if (isMatch(file.path.join('/'), glob)) {
          yield file
        }
      }
    }

    async * loadEntries(ref, options) {
      for await (const file of this.listEntries(ref, options)) {
        yield parse(file.path.join('/'), await super.loadText(file.hash), options)
      }
    }

    async loadEntry(ref, path, options) {
      const self = this
      const file = await super.loadObjectByPath(await tree.call(self, ref), path)
      return parse(path, blobToText(file.body), options)
    }

    async saveEntry(ref, entry, options = {message: MESSAGE, person: PERSON}) {
      const {message = MESSAGE, person = PERSON} = options
      const {path, body} = compile(entry)
      const parts = path.split('/')
      const hash = await super.checkout(ref)
      const commiter = {
        date: new Date(),
        ...PERSON,
        ...person,
      }
      // !entry - delete
      if (!entry.body) {
        return super.commit(ref, recursivelyDeleteFile(hash, parts), message, commiter)
      }
      // !!entry - save
      return super.commit(ref, recursivelyMakeFile(hash, parts, await super.saveText(body), body), message, commiter)
    }
  }
}
