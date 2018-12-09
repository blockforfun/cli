const toString = require('stream-to-string')
const WriteTextCommand = require('./text')
const {parse} = require('../../entry')

class WriteJsonCommand extends WriteTextCommand {
  async write(repo, source, path, options) {
    const {ref, input} = options
    try {
      await this.mount(repo, source, options)
      this.log(await repo.saveEntry(ref, {...JSON.parse(await toString(input)), ...parse(path, null, options)}))
    } finally {
      input.destroy()
    }
    return 1
  }
}

WriteJsonCommand.description = 'writes entries in json format to a BlockFor.fun git registry'
WriteJsonCommand.args = WriteTextCommand.args
WriteJsonCommand.flags = WriteTextCommand.flags
WriteJsonCommand.aliases = ['put:json']

module.exports = WriteJsonCommand
