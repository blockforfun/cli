const {createWriteStream} = require('fs')
const GitCommand = require('../../git-command')
const {MemRepo, FsRepo} = require('../../repo')
const {parse} = require('../../entry')

class DeleteTextCommand extends GitCommand {
  async delete(repo, source, path, options) {
    const {ref, output} = options
    try {
      const out = output ? message => output.write(`${message}\n`) : this.log
      await this.mount(repo, source, options)
      const hash = await repo.saveEntry(ref, parse(path, null, options), options)
      out(`${hash} ${path}`)
    } finally {
      if (output) {
        output.end()
      }
    }
    return 1
  }

  async run() {
    const {args, flags} = this.parse(DeleteTextCommand)
    const {source, output, path} = args
    try {
      const count = await this.delete(source.protocol ? new MemRepo() : new FsRepo(source.path), source, path, {output, ...flags})
      this.log(`Deleted ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

DeleteTextCommand.description = 'deletes entries in text format from a BlockFor.fun git registry'
DeleteTextCommand.args = [
  ...GitCommand.args,
  {
    name: 'path',
    description: 'git file path',
    required: true,
  },
  {
    name: 'output',
    description: 'output file path',
    parse: input => createWriteStream(input),
  },
]
DeleteTextCommand.flags = GitCommand.flags
DeleteTextCommand.aliases = ['rm', 'del', 'rm:text', 'del:text']

module.exports = DeleteTextCommand
