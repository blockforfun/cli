const GitOutCommand = require('../../git-out-command')
const {parse} = require('../../entry')

class DeleteTextCommand extends GitOutCommand {
  async delete(ref, path, options) {
    const hash = await this.repo.saveEntry(ref, parse(path, null, options), options)
    this.out.write(`${hash} ${path}`)
    return 1
  }

  async run() {
    const {args: {path}, flags, flags: {ref, output}} = this
    const count = await this.delete(ref, path, flags)
    this.log(`${output ? 'Wrote' : 'Deleted'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

DeleteTextCommand.description = 'deletes entries in text format from a BlockFor.fun git registry'
DeleteTextCommand.args = [
  ...GitOutCommand.args,
  {
    name: 'path',
    description: 'git file path',
    required: true,
  },
]
DeleteTextCommand.flags = GitOutCommand.flags
DeleteTextCommand.aliases = ['rm:text', 'del:text']

module.exports = DeleteTextCommand
