const {isMatch} = require('micromatch')

const GLOB = '**/*.txt'
const EXT = /\..+$/g
const DELIM = /[,\s]+/

module.exports = repo => {
  return class EntriesRepo extends repo {
    async * listEntries(tree, options = {glob: GLOB, ext: EXT, delim: DELIM}) {
      const {glob = GLOB, ext = EXT, delim = DELIM} = options
      for await (const file of super.listFiles(tree)) {
        const {path} = file
        if (isMatch(path.join('/'), glob)) {
          const body = await super.loadText(file.hash)
          const [flags, description] = body.split('\n')
          path.push(path.pop().replace(ext, ''))
          yield {
            number: path,
            flags: flags.split(delim).sort(),
            description,
            file,
          }
        }
      }
    }
  }
}
