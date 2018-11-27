const {isMatch} = require('micromatch')
const {GLOB, EXT, DELIM} = require('./consts')

module.exports = repo => {
  return class EntriesRepo extends repo {
    async * listEntries(tree, options = {glob: GLOB, ext: EXT, delim: DELIM}) {
      const {glob = GLOB, ext = EXT, delim = DELIM} = options
      for await (const file of super.listFiles(tree)) {
        const {path: number} = file
        const path = number.join('/')
        if (isMatch(path, glob)) {
          const body = await super.loadText(file.hash)
          const [flags, description] = body.split('\n')
          number.push(number.pop().replace(ext, ''))
          yield {
            number,
            flags: flags.split(delim).sort(),
            description,
            path,
          }
        }
      }
    }
  }
}
