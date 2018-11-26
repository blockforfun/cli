const {createWriteStream} = require('fs')
const BaseCommand = require('../lib/command')
const {MemRepo, FsRepo} = require('../lib/repo')

class JsonCommand extends BaseCommand {
  async list(repo, url, target, options) {
    const log = target ? message => target.write(`${message}\n`) : this.log
    try {
      let count = 0
      for await (const entry of repo.listEntries(await this.tree(repo, url, options), options)) {
        log(JSON.stringify(entry))
        count++
      }
      this.log(`Listed ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } finally {
      target.end()
    }
  }

  async run() {
    const {args, flags} = this.parse(JsonCommand)
    const {source, target} = args
    try {
      await this.list(source.protocol ? new MemRepo() : new FsRepo(source.path), source, target, flags)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

JsonCommand.description = 'lists entries in a BlockFor.fun git registry.'
JsonCommand.args = [
  ...BaseCommand.args,
  {
    name: 'target',
    description: 'path to target json file',
    parse: input => createWriteStream(input),
  },
]
JsonCommand.flags = BaseCommand.flags

module.exports = JsonCommand
