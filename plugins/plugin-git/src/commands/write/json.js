const WriteTextCommand = require('./text')
const {parse} = require('../../entry')

class WriteJsonCommand extends WriteTextCommand {
  async write(ref, path, body, options) {
    const entry = {...JSON.parse(body), ...parse(path, null, options)}
    this.out.write(JSON.stringify({
      path: path.split('/'),
      commit: await this.repo.saveEntry(ref, entry),
      entry,
    }))
    return 1
  }
}

WriteJsonCommand.description = 'writes entries in json format to a BlockFor.fun git registry'
WriteJsonCommand.args = WriteTextCommand.args
WriteJsonCommand.flags = WriteTextCommand.flags
WriteJsonCommand.aliases = ['put:json']

module.exports = WriteJsonCommand
