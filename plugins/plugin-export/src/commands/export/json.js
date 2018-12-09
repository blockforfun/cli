const exportTextCommand = require('./text')

class exportJsonCommand extends exportTextCommand {
  async list(repo, source, options) {
    const {target} = options
    const out = target ? message => target.write(`${message}\n`) : this.log
    let count = 0
    await this.mount(repo, source, options)
    for await (const entry of repo.loadEntries(await this.tree(repo, options), options)) {
      out(JSON.stringify(entry))
      count++
    }
    return count
  }
}

exportJsonCommand.description = 'exports json entries from a BlockFor.fun git registry'
exportJsonCommand.args = exportTextCommand.args
exportJsonCommand.flags = exportTextCommand.flags

module.exports = exportJsonCommand
