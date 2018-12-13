const ExportTextCommand = require('./text')

class ExportJsonCommand extends ExportTextCommand {
  async list(ref, options) {
    let count = 0
    for await (const entry of this.repo.loadEntries(ref, options)) {
      this.out.write(JSON.stringify(entry))
      count++
    }
    return count
  }
}

ExportJsonCommand.description = 'exports json entries from a BlockFor.fun git registry'
ExportJsonCommand.args = ExportTextCommand.args
ExportJsonCommand.flags = ExportTextCommand.flags

module.exports = ExportJsonCommand
