const {createReadStream} = require('fs')
const toString = require('stream-to-string')
const GitCommand = require('../../git-command')
const {MemRepo, FsRepo} = require('../../repo')
const {parse} = require('../../entry')

class WriteTextCommand extends GitCommand {
  async write(repo, source, path, options) {
    const {ref, input} = options
    try {
      await this.mount(repo, source, options)
      const commit = await repo.saveEntry(ref, parse(path, await toString(input), options))
      this.log(`Committed ${commit}`)
    } finally {
      input.destroy()
    }
    return 1
  }

  async run() {
    const {args, flags} = this.parse(WriteTextCommand)
    const {source, path, input} = args
    try {
      const count = await this.write(source.protocol ? new MemRepo() : new FsRepo(source.path), source, path, {input, ...flags})
      this.log(`Wrote ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

WriteTextCommand.description = 'writes text formatted entries to a BlockFor.fun git registry'
WriteTextCommand.args = [
  ...GitCommand.args,
  {
    name: 'path',
    description: 'path to git file',
    required: true,
  },
  {
    name: 'input',
    description: 'path to input file',
    parse: input => createReadStream(input),
    required: true,
  },
]
WriteTextCommand.flags = GitCommand.flags
WriteTextCommand.aliases = ['put', 'put:text']

module.exports = WriteTextCommand
