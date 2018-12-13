const GitOutCommand = require('../../git-out-command')

class ListTextCommand extends GitOutCommand {
  async list(ref, options) {
    let count = 0
    for await (const file of this.repo.listEntries(ref, options)) {
      this.out.write(`${file.hash} ${file.path.join('/')}`)
      count++
    }
    return count
  }

  async run() {
    const {flags, flags: {ref, output}} = this
    const count = await this.list(ref, flags)
    this.log(`${output ? 'Wrote' : 'Listed'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

ListTextCommand.description = 'lists entries in text format from a BlockFor.fun git registry'
ListTextCommand.args = GitOutCommand.args
ListTextCommand.flags = GitOutCommand.flags
ListTextCommand.aliases = ['ls:text']

module.exports = ListTextCommand
