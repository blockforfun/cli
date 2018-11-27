const ListCommand = require('./text')

class ListJsonCommand extends ListCommand {
  async list(repo, url, options) {
    const {target} = options
    const write = target ? message => target.write(`${message}\n`) : this.log
    let count = 0
    try {
      for await (const entry of repo.listEntries(await this.tree(repo, url, options), options)) {
        write(JSON.stringify(entry))
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
ListJsonCommand.args = ListCommand.args
ListJsonCommand.flags = ListCommand.flags
ListJsonCommand.aliases = ['ls:json']

module.exports = ListJsonCommand
