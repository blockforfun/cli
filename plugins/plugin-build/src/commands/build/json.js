const BuildTextCommand = require('./text')

class BuildJsonCommand extends BuildTextCommand {
  async list(repo, source, options) {
    const {target} = options
    let count = 0
    try {
      const log = target ? message => target.write(`${message}\n`) : this.log
      await this.mount(repo, source, options)
      for await (const entry of repo.loadEntries(await this.tree(repo, options), options)) {
        log(JSON.stringify(entry))
        count++
      }
    } finally {
      if (target) {
        target.end()
      }
    }
    return count
  }
}

BuildJsonCommand.description = 'builds json from a BlockFor.fun git registry'
BuildJsonCommand.args = BuildTextCommand.args
BuildJsonCommand.flags = BuildTextCommand.flags

module.exports = BuildJsonCommand
