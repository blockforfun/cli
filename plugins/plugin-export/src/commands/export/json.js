const ExportTextCommand = require('./text')

class ExportJsonCommand extends ExportTextCommand {
  async list(repo, options) {
    let count = 0
    for await (const entry of repo.loadEntries(await this.tree(repo, options), options)) {
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
