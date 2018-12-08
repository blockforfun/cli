const {createWriteStream} = require('fs')
const GitCommand = require('@blockforfun/plugin-git/src/git-command')
const {MemRepo, FsRepo} = require('@blockforfun/plugin-git/src/repo')

class BuildTextCommand extends GitCommand {
  async list(repo, source, options) {
    const {target} = options
    let count = 0
    try {
      const log = target ? message => target.write(`${message}\n`) : this.log
      await this.mount(repo, source, options)
      for await (const entry of repo.loadEntries(await this.tree(repo, options), options)) {
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
    const {args, flags} = this.parse(BuildTextCommand)
    const {source, target} = args
    try {
      const count = await this.list(source.protocol ? new MemRepo() : new FsRepo(source.path), source, {target, ...flags})
      this.log(`Built ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

BuildTextCommand.description = 'lists entries in text format from a BlockFor.fun git registry'
BuildTextCommand.args = [
  ...GitCommand.args,
  {
    name: 'target',
    description: 'path to target text file',
    parse: input => createWriteStream(input),
  },
]
BuildTextCommand.flags = GitCommand.flags

module.exports = BuildTextCommand
