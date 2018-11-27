const {createWriteStream} = require('fs')
const GitCommand = require('../../lib/command')
const {MemRepo, FsRepo} = require('../../lib/repo')

class ListTextCommand extends GitCommand {
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
    const {args, flags} = this.parse(ListTextCommand)
    const {source, target} = args
    try {
      const count = await this.list(source.protocol ? new MemRepo() : new FsRepo(source.path), source, {target, ...flags})
      this.log(`${target ? 'Wrote' : 'Listed'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

ListTextCommand.description = 'lists entries in text format from a BlockFor.fun git registry'
ListTextCommand.args = [
  ...GitCommand.args,
  {
    name: 'target',
    description: 'path to target text file',
    parse: input => createWriteStream(input),
  },
]
ListTextCommand.flags = GitCommand.flags
ListTextCommand.aliases = ['ls', 'ls:text']

module.exports = ListTextCommand
