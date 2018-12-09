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

module.exports = repo => {
  return class EntryRepo extends repo {
    async * listEntries(tree, options = {glob: GLOB}) {
      const {glob = GLOB} = options
      for await (const file of super.listFiles(tree)) {
        if (isMatch(file.path.join('/'), glob)) {
          yield file
        }
      }
    }

    async * loadEntries(tree, options) {
      for await (const file of this.listEntries(tree, options)) {
        yield parse(file.path.join('/'), await super.loadText(file.hash), options)
      }
    }

    async loadEntry(tree, path, options) {
      const file = await super.loadObjectByPath(tree, path)
      return parse(path, blobToText(file.body), options)
    }

    async saveEntry(ref, entry, options = {message: MESSAGE, person: PERSON}) {
      const {message = MESSAGE, person = PERSON} = options
      const {path, body} = compile(entry)
      const parts = path.split('/')
      const tree = await super.checkout(ref)
      const commiter = {
        date: new Date(),
        ...PERSON,
        ...person,
      }
      // !entry - delete
      if (!entry.body) {
        return super.commit(ref, recursivelyDeleteFile(tree, parts), message, commiter)
      }
      // !!entry - save
      return super.commit(ref, recursivelyMakeFile(tree, parts, await super.saveText(body), body), message, commiter)
    }
  }
}
