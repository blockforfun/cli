const {createWriteStream} = require('fs')
const GitCommand = require('../../git-command')
const {MemRepo, FsRepo} = require('../../repo')

class ListTextCommand extends GitCommand {
  async list(repo, source, options) {
    const {output} = options
    let count = 0
    const out = output ? message => output.write(`${message}\n`) : this.log
    await this.mount(repo, source, options)
    for await (const file of repo.listEntries(await this.tree(repo, options), options)) {
      out(`${file.hash} ${file.path.join('/')}`)
      count++
    }
    return count
  }

  async run() {
    const {args, flags} = this.parse(ListTextCommand)
    const {source, output} = args
    try {
      const count = await this.list(source.protocol ? new MemRepo() : new FsRepo(source.path), source, {output, ...flags})
      this.log(`${output ? 'Wrote' : 'Listed'} ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } catch (error) {
      this.error(error.message, {exit: 1})
    } finally {
      if (output) {
        output.end()
      }
    }
  }
}

ListTextCommand.description = 'lists entries in text format from a BlockFor.fun git registry'
ListTextCommand.args = [
  ...GitCommand.args,
  {
    name: 'output',
    description: 'output file path',
    parse: input => createWriteStream(input),
  },
]
ListTextCommand.flags = GitCommand.flags
ListTextCommand.aliases = ['ls', 'ls:text']

module.exports = ListTextCommand
