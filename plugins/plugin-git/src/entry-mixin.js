const {isMatch} = require('micromatch')
const {GLOB, PERSON, MESSAGE} = require('./const')
const {parse, compile} = require('./entry')
const {Mode} = require('@es-git/core')
const {blobToText} = require('@es-git/object-mixin')

const recursivelyMakeFile = (parent, path, mode, hash, body) => {
  const [name, ...subPath] = path
  const {folders} = parent
  if (subPath.length === 0) {
    parent.files[name] = {
      hash,
      mode,
      body,
      get text() {
        return body
      },
    }
  } else {
    recursivelyMakeFile(folders[name] || (folders[name] = {files: {}, folders: {}}), subPath, mode, hash, body)
  }
  return parent
}

module.exports = repo => {
  return class EntriesRepo extends repo {
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
      return super.commit(ref, recursivelyMakeFile(await super.checkout(ref), path.split('/'), Mode.file, await super.saveText(body), body), message, {
        date: new Date(),
        ...PERSON,
        ...person,
      })
    }
  }
}
