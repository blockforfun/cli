const GitOutCommand = require('../../git-out-command')
const {MemRepo, FsRepo} = require('../../repo')
const {parse} = require('../../entry')

class DeleteTextCommand extends GitOutCommand {
  async delete(repo, path, options) {
    const {ref} = options
    const hash = await repo.saveEntry(ref, parse(path, null, options), options)
    this.out(`${hash} ${path}`)
    return 1
  }

  async init() {
    await super.init()
    const {args: {output}} = this
    this.out = output ? message => output.write(`${message}\n`) : this.log
  }

  async run() {
    const {args: {source, path}, flags: options} = this
    const repo = source.protocol ? new MemRepo() : new FsRepo(source.path)
    await this.mount(repo, source, options)
    const count = await this.delete(repo, path, options)
    this.log(`Deleted ${count} ${count === 1 ? 'entry' : 'entries'}`)
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
