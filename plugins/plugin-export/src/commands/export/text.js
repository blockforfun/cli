const {createWriteStream} = require('fs')
const GitCommand = require('@blockforfun/plugin-git/src/git-command')
const {MemRepo, FsRepo} = require('@blockforfun/plugin-git/src/repo')

class exportTextCommand extends GitCommand {
  async list(repo, source, options) {
    const {target} = options
    let count = 0
    try {
      const out = target ? message => target.write(`${message}\n`) : this.log
      await this.mount(repo, source, options)
      for await (const entry of repo.loadEntries(await this.tree(repo, options), options)) {
        out(`${entry.number.join('')}\t${entry.flags.join(',')}\t${entry.description}`)
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
    const {args, flags} = this.parse(exportTextCommand)
    const {source, target} = args
    try {
      const count = await this.list(source.protocol ? new MemRepo() : new FsRepo(source.path), source, {target, ...flags})
      this.log(`Built ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

exportTextCommand.description = 'exports text entries from a BlockFor.fun git registry'
exportTextCommand.args = [
  ...GitCommand.args,
  {
    name: 'target',
    description: 'path to target file',
    parse: input => createWriteStream(input),
  },
]
exportTextCommand.flags = GitCommand.flags

module.exports = exportTextCommand
