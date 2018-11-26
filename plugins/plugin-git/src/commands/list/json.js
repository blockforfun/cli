const ListCommand = require('./text')

class ListJsonCommand extends ListCommand {
  async list(repo, url, target, options) {
    const log = target ? message => target.write(`${message}\n`) : this.log
    try {
      let count = 0
      for await (const entry of repo.listEntries(await this.tree(repo, url, options), options)) {
        log(JSON.stringify(entry))
        count++
      }
      this.log(`Listed ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } finally {
      if (target) {
        target.end()
      }
    }
  }
}

ListJsonCommand.description = 'lists entries in json from a BlockFor.fun git registry.'
ListJsonCommand.args = ListCommand.args
ListJsonCommand.flags = ListCommand.flags
ListJsonCommand.aliases = ['ls:json']

module.exports = ListJsonCommand
