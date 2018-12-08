const toString = require('stream-to-string')
const WriteTextCommand = require('./text')
const {parse} = require('../../entry')

class WriteJsonCommand extends WriteTextCommand {
  async write(repo, source, path, options) {
    const {ref, input} = options
    try {
      await this.mount(repo, source, options)
      const commit = await repo.saveEntry(ref, {...JSON.parse(await toString(input)), ...parse(path, null, options)})
      this.log(`Committed ${commit}`)
    } finally {
      input.destroy()
    }
    return 1
  }
}

WriteJsonCommand.description = 'writes json formatted entries to a BlockFor.fun git registry'
WriteJsonCommand.args = WriteTextCommand.args
WriteJsonCommand.flags = WriteTextCommand.flags
WriteJsonCommand.aliases = ['put:json']

module.exports = WriteJsonCommand
