const GitOutCommand = require('../../git-out-command')
const {parse} = require('../../entry')

class DeleteTextCommand extends GitOutCommand {
  async delete(ref, path, options) {
    const hash = await this.repo.saveEntry(ref, parse(path, null, options), options)
    this.out(`${hash} ${path}`)
    return 1
  }

  async init() {
    await super.init()
    const {args: {output}} = this
    this.out = output ? message => output.write(`${message}\n`) : this.log
  }

  async run() {
    const {args: {path, output}, flags: {ref}, flags} = this
    const count = await this.delete(ref, path, flags)
    this.log(`${output ? 'Wrote' : 'Deleted'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

DeleteTextCommand.description = 'deletes entries in text format from a BlockFor.fun git registry'
DeleteTextCommand.args = [
  ...GitOutCommand.args.slice(0, -1),
  {
    name: 'path',
    description: 'git file path',
    required: true,
  },
  ...GitOutCommand.args.slice(-1),
]
DeleteTextCommand.flags = GitOutCommand.flags
DeleteTextCommand.aliases = ['rm', 'del', 'rm:text', 'del:text']

module.exports = DeleteTextCommand
