const {createReadStream} = require('fs')
const toString = require('stream-to-string')
const GitCommand = require('../../git-command')
const {MemRepo, FsRepo} = require('../../repo')
const {parse} = require('../../entry')

class WriteTextCommand extends GitCommand {
  async write(repo, source, path, options) {
    const {ref, input} = options
    await this.mount(repo, source, options)
    const hash = await repo.saveEntry(ref, parse(path, await toString(input), options))
    this.log(`${hash} ${path}`)
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
    } finally {
      input.destroy()
    }
  }
}

WriteTextCommand.description = 'writes entries in text format to a BlockFor.fun git registry'
WriteTextCommand.args = [
  ...GitCommand.args,
  {
    name: 'path',
    description: 'git file path',
    required: true,
  },
  {
    name: 'input',
    description: 'input file path',
    parse: input => createReadStream(input),
    required: true,
  },
]
WriteTextCommand.flags = GitCommand.flags
WriteTextCommand.aliases = ['put', 'put:text']

module.exports = WriteTextCommand
