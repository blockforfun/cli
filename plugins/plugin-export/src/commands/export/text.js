const GitOutCommand = require('@blockforfun/plugin-git/src/git-out-command')

class ExportTextCommand extends GitOutCommand {
  async list(ref, options) {
    let count = 0
    for await (const entry of this.repo.loadEntries(ref, options)) {
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
    const {flags: {ref}, flags} = this
    const count = await this.list(ref, flags)
    this.log(`Built ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

ExportTextCommand.description = 'exports text entries from a BlockFor.fun git registry'
ExportTextCommand.args = GitOutCommand.args
ExportTextCommand.flags = GitOutCommand.flags

module.exports = ExportTextCommand
