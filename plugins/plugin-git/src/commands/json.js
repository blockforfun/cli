const BaseCommand = require('../lib/command')
const {MemRepo, FsRepo} = require('../lib/repo')

class JsonCommand extends BaseCommand {
  async list(repo, url, options) {
    let count = 0
    for await (const entry of repo.listEntries(await this.tree(repo, url, options), options)) {
      this.log(JSON.stringify(entry))
      count++
    }
    this.log(`Listed ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }

  async run() {
    const {args, flags} = this.parse(JsonCommand)
    const {source} = args
    try {
      await this.list(source.protocol ? new MemRepo() : new FsRepo(source.path), source, flags)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

JsonCommand.description = 'lists entries in a BlockFor.fun git registry.'
JsonCommand.args = BaseCommand.args
JsonCommand.flags = BaseCommand.flags

module.exports = JsonCommand
