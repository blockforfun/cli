const {blobToText} = require('@es-git/object-mixin')
const {EXT, DELIM} = require('../../consts')
const ReadTextCommand = require('./text')

class ReadJsonCommand extends ReadTextCommand {
  async read(repo, url, path, options) {
    const {target, ext = EXT, delim = DELIM} = options
    const log = target ? message => target.write(message) : this.log
    try {
      const entry = await repo.loadObjectByPath(await this.tree(repo, url, options), path)
      const [flags, description] = blobToText(entry.body).split('\n')
      log({
        number: path.replace(ext, '').split('/').filter(part => part.length !== 0),
        flags: flags.split(delim).sort(),
        description,
        path,
      })
    } finally {
      if (target) {
        target.end()
      }
    }
    return 1
  }
}

ReadJsonCommand.description = 'reads entries in json format from a BlockFor.fun git registry'
ReadJsonCommand.args = ReadTextCommand.args
ReadJsonCommand.flags = ReadTextCommand.flags
ReadJsonCommand.aliases = ['get:json']

module.exports = ReadJsonCommand
