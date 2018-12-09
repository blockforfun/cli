const ExportTextCommand = require('./text')

class ExportJsonCommand extends ExportTextCommand {
  async list(options) {
    let count = 0
    for await (const entry of this.repo.loadEntries(await this.tree(options), options)) {
      this.out(JSON.stringify(entry))
      count++
    }
    return count
  }
}

ExportJsonCommand.description = 'exports json entries from a BlockFor.fun git registry'
ExportJsonCommand.args = ExportTextCommand.args
ExportJsonCommand.flags = ExportTextCommand.flags

module.exports = ExportJsonCommand
