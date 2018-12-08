const ReadTextCommand = require('./text')

class ReadJsonCommand extends ReadTextCommand {
  async read(repo, source, path, options) {
    const {output} = options
    try {
      const out = output ? message => output.write(message) : this.log
      await this.mount(repo, source, options)
      out(await repo.loadEntry(await this.tree(repo, options), path, options))
    } finally {
      if (output) {
        output.end()
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
