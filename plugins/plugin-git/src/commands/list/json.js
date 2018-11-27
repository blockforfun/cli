const ListTextCommand = require('./text')

class ListJsonCommand extends ListTextCommand {
  async list(repo, url, options) {
    const {target} = options
    const log = target ? message => target.write(`${message}\n`) : this.log
    let count = 0
    try {
      for await (const entry of repo.listEntries(await this.tree(repo, url, options), options)) {
        log(JSON.stringify(entry))
        count++
      }
    } finally {
      if (target) {
        target.end()
      }
    }
    return count
  }
}

ListJsonCommand.description = 'lists entries in json format from a BlockFor.fun git registry'
ListJsonCommand.args = ListTextCommand.args
ListJsonCommand.flags = ListTextCommand.flags
ListJsonCommand.aliases = ['ls:json']

module.exports = ListJsonCommand
