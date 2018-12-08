const ReadTextCommand = require('./text')

class ReadJsonCommand extends ReadTextCommand {
  async read(repo, source, path, options) {
    const {target} = options
    try {
      const log = target ? message => target.write(message) : this.log
      await this.mount(repo, source, options)
      log(await repo.loadEntry(await this.tree(repo, options), path, options))
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
