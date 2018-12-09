const GitOutCommand = require('../../git-out-command')

class ListTextCommand extends GitOutCommand {
  async list(options) {
    let count = 0
    for await (const file of this.repo.listEntries(await this.tree(options), options)) {
      this.out(`${file.hash} ${file.path.join('/')}`)
      count++
    }
    return count
  }

  async init() {
    await super.init()
    const {args: {output}} = this
    this.out = output ? message => output.write(`${message}\n`) : this.log
  }

  async run() {
    const {args: {output}, flags: options} = this
    const count = await this.list(options)
    this.log(`${output ? 'Wrote' : 'Listed'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

ListTextCommand.description = 'lists entries in text format from a BlockFor.fun git registry'
ListTextCommand.args = GitOutCommand.args
ListTextCommand.flags = GitOutCommand.flags
ListTextCommand.aliases = ['ls', 'ls:text']

module.exports = ListTextCommand
