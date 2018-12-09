const GitOutCommand = require('../../git-out-command')
const {compile} = require('../../entry')

class ReadTextCommand extends GitOutCommand {
  async read(path, options) {
    this.out(compile(await this.repo.loadEntry(await this.tree(options), path, options), options).body)
    return 1
  }

  async init() {
    await super.init()
    const {args: {output}} = this
    this.out = output ? message => output.write(message) : this.log
  }

  async run() {
    const {args: {path, output}, flags: options} = this
    const count = await this.read(path, options)
    this.log(`${output ? 'Wrote' : 'Read'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

ReadTextCommand.description = 'reads entries in text format from a BlockFor.fun git registry'
ReadTextCommand.args = [
  ...GitOutCommand.args.slice(0, -1),
  {
    name: 'path',
    description: 'git file path',
    required: true,
  },
  ...GitOutCommand.args.slice(-1),
]
ReadTextCommand.flags = GitOutCommand.flags
ReadTextCommand.aliases = ['get', 'get:text']

module.exports = ReadTextCommand
