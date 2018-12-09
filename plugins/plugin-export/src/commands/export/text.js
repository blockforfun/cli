const GitOutCommand = require('@blockforfun/plugin-git/src/git-out-command')
const {MemRepo, FsRepo} = require('@blockforfun/plugin-git/src/repo')

class ExportTextCommand extends GitOutCommand {
  async list(repo, options) {
    let count = 0
    for await (const entry of repo.loadEntries(await this.tree(repo, options), options)) {
      this.out(`${entry.number.join('')}\t${entry.flags.join(',')}\t${entry.description}`)
      count++
    }
    return count
  }

  async init() {
    await super.init()
    const {args: {output}} = this
    this.out = output ? message => output.write(message) : this.log
  }

  async run() {
    const {args: {source}, flags: options} = this
    const repo = source.protocol ? new MemRepo() : new FsRepo(source.path)
    await this.mount(repo, source, options)
    const count = await this.list(repo, options)
    this.log(`Built ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

ExportTextCommand.description = 'exports text entries from a BlockFor.fun git registry'
ExportTextCommand.args = GitOutCommand.args
ExportTextCommand.flags = GitOutCommand.flags

module.exports = ExportTextCommand
