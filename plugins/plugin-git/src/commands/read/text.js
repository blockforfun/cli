const GitOutCommand = require('../../git-out-command')
const {compile} = require('../../entry')

class ReadTextCommand extends GitOutCommand {
  async read(ref, path, options) {
    const {body} = compile(await this.repo.loadEntry(ref, path, options), options)
    this.out.write(body)
    return 1
  }

  async run() {
    const {args: {path}, flags, flags: {ref, output}} = this
    const count = await this.read(ref, path, flags)
    this.log(`${output ? 'Wrote' : 'Read'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

ReadTextCommand.description = 'reads entries in text format from a BlockFor.fun git registry'
ReadTextCommand.args = [
  ...GitOutCommand.args,
  {
    name: 'path',
    description: 'git file path',
    required: true,
  },
]
ReadTextCommand.flags = GitOutCommand.flags
ReadTextCommand.aliases = ['get:text']

module.exports = ReadTextCommand
