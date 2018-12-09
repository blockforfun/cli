const {createReadStream} = require('fs')
const toString = require('stream-to-string')
const GitCommand = require('../../git-command')
const {MemRepo, FsRepo} = require('../../repo')
const {parse} = require('../../entry')

class WriteTextCommand extends GitCommand {
  async write(repo, path, body, options) {
    const {ref} = options
    const hash = await repo.saveEntry(ref, parse(path, body, options))
    this.log(`${hash} ${path}`)
    return 1
  }

  async finally(err) {
    const {args: {input}} = this
    if (input) {
      input.destroy()
    }
    return super.finally(err)
  }

  async run() {
    const {args: {source, path, input}, flags: options} = this
    const repo = source.protocol ? new MemRepo() : new FsRepo(source.path)
    await this.mount(repo, source, options)
    const count = await this.write(repo, path, await toString(input), options)
    this.log(`Wrote ${count} ${count === 1 ? 'entry' : 'entries'}`)
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
