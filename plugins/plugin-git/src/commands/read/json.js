const ReadTextCommand = require('./text')

class ReadJsonCommand extends ReadTextCommand {
  async read(path, options) {
    this.out(JSON.stringify(await this.repo.loadEntry(await this.tree(options), path, options)))
    return 1
  }
}

ReadJsonCommand.description = 'reads entries in json format from a BlockFor.fun git registry'
ReadJsonCommand.args = ReadTextCommand.args
ReadJsonCommand.flags = ReadTextCommand.flags
ReadJsonCommand.aliases = ['get:json']

module.exports = ReadJsonCommand
