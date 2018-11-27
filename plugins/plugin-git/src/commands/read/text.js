const {createWriteStream} = require('fs')
const {blobToText} = require('@es-git/object-mixin')
const GitCommand = require('../../git-command')
const {MemRepo, FsRepo} = require('../../repo')

class ReadTextCommand extends GitCommand {
  async read(repo, url, path, options) {
    const {target} = options
    const log = target ? message => target.write(message) : this.log
    try {
      const entry = await repo.loadObjectByPath(await this.tree(repo, url, options), path)
      log(blobToText(entry.body))
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
