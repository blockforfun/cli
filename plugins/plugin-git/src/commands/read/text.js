const {createWriteStream} = require('fs')
const GitCommand = require('../../git-command')
const {MemRepo, FsRepo} = require('../../repo')
const {compile} = require('../../entry')

class ReadTextCommand extends GitCommand {
  async read(repo, source, path, options) {
    const {output} = options
    const out = output ? message => output.write(message) : this.log
    await this.mount(repo, source, options)
    out(compile(await repo.loadEntry(await this.tree(repo, options), path, options), options).body)
    return 1
  }

  async run() {
    const {args, flags} = this.parse(ReadTextCommand)
    const {source, path, output} = args
    try {
      const count = await this.read(source.protocol ? new MemRepo() : new FsRepo(source.path), source, path, {output, ...flags})
      this.log(`${output ? 'Wrote' : 'Read'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } catch (error) {
      this.error(error.message, {exit: 1})
    } finally {
      if (output) {
        output.end()
      }
    }
  }
}

ReadTextCommand.description = 'reads entries in text format from a BlockFor.fun git registry'
ReadTextCommand.args = [
  ...GitCommand.args,
  {
    name: 'path',
    description: 'git file path',
    required: true,
  },
  {
    name: 'output',
    description: 'output file path',
    parse: input => createWriteStream(input),
  },
]
ReadTextCommand.flags = GitCommand.flags
ReadTextCommand.aliases = ['get', 'get:text']

module.exports = ReadTextCommand
