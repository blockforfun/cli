const {parse} = require('url')
const BaseCommand = require('../lib/command')
const {MemRepo, FsRepo} = require('../lib/repo')

class ListCommand extends BaseCommand {
  async list(repo, url, options) {
    let count = 0
    for await (const entry of repo.listEntries(await this.tree(repo, url, options), options)) {
      this.log(`${entry.number.join('')}\t${entry.flags.join(',')}\t${entry.description}`)
      count++
    }
    this.log(`Listed ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }

  async run() {
    const {args, flags} = this.parse(ListCommand)
    const {source} = args
    try {
      await this.list(source.protocol ? new MemRepo() : new FsRepo(source.path), source, flags)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

ListCommand.description = 'lists entries in a BlockFor.fun git registry.'
ListCommand.args = [
  {
    name: 'source',
    description: 'git source repository URL or path',
    parse: input => parse(input),
    required: true,
  },
]
ListCommand.flags = BaseCommand.flags

module.exports = ListCommand
