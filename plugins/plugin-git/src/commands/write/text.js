const {createReadStream} = require('fs')
const toString = require('stream-to-string')
const GitCommand = require('../../git-command')
const GitOutCommand = require('../../git-out-command')
const {parse} = require('../../entry')

class WriteTextCommand extends GitOutCommand {
  async write(ref, path, body, options) {
    const hash = await this.repo.saveEntry(ref, parse(path, body, options))
    this.out.write(`${hash} ${path}`)
    return 1
  }

  async finally(err) {
    const {args: {input} = {}} = this
    if (input) {
      input.destroy()
    }
    return super.finally(err)
  }

  async run() {
    const {args: {path, input}, flags: {ref}, flags} = this
    const count = await this.write(ref, path, await toString(input), flags)
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
WriteTextCommand.aliases = ['put:text']

module.exports = WriteTextCommand
