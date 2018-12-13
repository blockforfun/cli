const GitOutCommand = require('../../git-out-command')

class ExportTextCommand extends GitOutCommand {
  async list(ref, options) {
    let count = 0
    for await (const entry of this.repo.loadEntries(ref, options)) {
      this.out.write(`${entry.number.join('')}\t${entry.flags.join(',')}\t${entry.description}`)
      count++
    }
    return count
  }

  async run() {
    const {flags, flags: {ref, output}} = this
    const count = await this.list(ref, flags)
    this.log(`${output ? 'Wrote' : 'Exported'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

ExportTextCommand.description = 'exports text entries from a BlockFor.fun git registry'
ExportTextCommand.args = GitOutCommand.args
ExportTextCommand.flags = GitOutCommand.flags

module.exports = ExportTextCommand
