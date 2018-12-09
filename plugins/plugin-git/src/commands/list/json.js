const ListTextCommand = require('./text')

class ListJsonCommand extends ListTextCommand {
  async list(repo, source, options) {
    const {output} = options
    let count = 0
    const out = output ? message => output.write(`${message}\n`) : this.log
    await this.mount(repo, source, options)
    for await (const file of repo.listEntries(await this.tree(repo, options), options)) {
      out(JSON.stringify(file))
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
