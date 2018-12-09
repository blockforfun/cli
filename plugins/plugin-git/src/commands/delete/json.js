const DeleteTextCommand = require('./text')
const {parse} = require('../../entry')

class DeleteJsonCommand extends DeleteTextCommand {
  async delete(path, options) {
    const {ref} = options
    this.out(JSON.stringify({
      path: path.split('/'),
      commit: await this.repo.saveEntry(ref, parse(path, null, options), options),
    }))
    return 1
  }
}

DeleteJsonCommand.description = 'deletes entries in json format from a BlockFor.fun git registry'
DeleteJsonCommand.args = DeleteTextCommand.args
DeleteJsonCommand.flags = DeleteTextCommand.flags
DeleteJsonCommand.aliases = ['rm:json', 'del:json']

module.exports = DeleteJsonCommand
