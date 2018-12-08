const {createWriteStream} = require('fs')
const GitCommand = require('../../git-command')
const {MemRepo, FsRepo} = require('../../repo')
const {compile} = require('../../entry')

class ReadTextCommand extends GitCommand {
  async read(repo, source, path, options) {
    const {target} = options
    try {
      const log = target ? message => target.write(message) : this.log
      await this.mount(repo, source, options)
      log(compile(await repo.loadEntry(await this.tree(repo, options), path, options), options).body)
    } finally {
      if (target) {
        target.end()
      }
    }
    return 1
  }

  async run() {
    const {args, flags} = this.parse(ReadTextCommand)
    const {source, path, target} = args
    try {
      const count = await this.read(source.protocol ? new MemRepo() : new FsRepo(source.path), source, path, {target, ...flags})
      this.log(`${target ? 'Wrote' : 'Read'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

ReadTextCommand.description = 'reads entries in text format from a BlockFor.fun git registry'
ReadTextCommand.args = [
  ...GitCommand.args,
  {
    name: 'path',
    description: 'path to git file',
    required: true,
  },
  {
    name: 'target',
    description: 'path to target text file',
    parse: input => createWriteStream(input),
  },
]
ReadTextCommand.flags = GitCommand.flags
ReadTextCommand.aliases = ['get', 'get:text']

module.exports = ReadTextCommand
