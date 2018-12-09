const ListTextCommand = require('./text')

class ListJsonCommand extends ListTextCommand {
  async list(options) {
    let count = 0
    for await (const file of this.repo.listEntries(await this.tree(options), options)) {
      this.out(JSON.stringify(file))
      count++
    }
    return count
  }
}

ListJsonCommand.description = 'lists entries in json format from a BlockFor.fun git registry'
ListJsonCommand.args = ListTextCommand.args
ListJsonCommand.flags = ListTextCommand.flags
ListJsonCommand.aliases = ['ls:json']

module.exports = ListJsonCommand
