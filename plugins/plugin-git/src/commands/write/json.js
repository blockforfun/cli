const toString = require('stream-to-string')
const WriteTextCommand = require('./text')
const {parse} = require('../../entry')

class WriteJsonCommand extends WriteTextCommand {
  async write(repo, source, path, options) {
    const {ref, input} = options
    try {
      await this.mount(repo, source, options)
      const entry = {...JSON.parse(await toString(input)), ...parse(path, null, options)}
      this.log(JSON.stringify({
        path: path.split('/'),
        commit: await repo.saveEntry(ref, entry),
        entry,
      }))
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
