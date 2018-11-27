const {createWriteStream} = require('fs')
const GitCommand = require('../../lib/command')
const {MemRepo, FsRepo} = require('../../lib/repo')

class ListCommand extends GitCommand {
  async list(repo, url, options) {
    const {target} = options
    const log = target ? message => target.write(`${message}\n`) : this.log
    let count = 0
    try {
      for await (const entry of repo.listEntries(await this.tree(repo, url, options), options)) {
        log(`${entry.number.join('')}\t${entry.flags.join(',')}\t${entry.description}`)
        count++
      }
    } finally {
      if (target) {
        target.end()
      }
    }
    return count
  }

  async run() {
    const {args, flags} = this.parse(ListCommand)
    const {source, target} = args
    try {
      const count = await this.list(source.protocol ? new MemRepo() : new FsRepo(source.path), source, {target, ...flags})
      this.log(`${target ? 'Wrote' : 'Listed'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

ListCommand.description = 'lists entries in text format from a BlockFor.fun git registry'
ListCommand.args = [
  ...GitCommand.args,
  {
    name: 'target',
    description: 'path to target text file',
    parse: input => createWriteStream(input),
  },
]
ListCommand.flags = GitCommand.flags
ListCommand.aliases = ['ls', 'ls:text']

module.exports = ListCommand
