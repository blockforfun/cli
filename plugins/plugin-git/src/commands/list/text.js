const {createWriteStream} = require('fs')
const BaseCommand = require('../../lib/command')
const {MemRepo, FsRepo} = require('../../lib/repo')

class ListCommand extends BaseCommand {
  async list(repo, url, target, options) {
    const write = target ? message => target.write(`${message}\n`) : this.log
    try {
      let count = 0
      for await (const entry of repo.listEntries(await this.tree(repo, url, options), options)) {
        write(`${entry.number.join('')}\t${entry.flags.join(',')}\t${entry.description}`)
        count++
      }
      this.log(`${target ? 'Wrote' : 'Listed'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } finally {
      if (target) {
        target.end()
      }
    }
  }

  async run() {
    const {args, flags} = this.parse(ListCommand)
    const {source, target} = args
    try {
      await this.list(source.protocol ? new MemRepo() : new FsRepo(source.path), source, target, flags)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

ListCommand.description = 'lists entries in text format from a BlockFor.fun git registry'
ListCommand.args = [
  ...BaseCommand.args,
  {
    name: 'target',
    description: 'path to target json file',
    parse: input => createWriteStream(input),
  },
]
ListCommand.flags = BaseCommand.flags
ListCommand.aliases = ['list', 'list:text', 'ls', 'ls:text']

module.exports = ListCommand
