const {createWriteStream} = require('fs')
const GitCommand = require('./git-command')

class GitOutCommand extends GitCommand {
  async finally(err) {
    const {args: {output} = {}} = this
    if (output) {
      output.end()
    }
    return super.finally(err)
  }
}

GitOutCommand.description = 'deletes entries in text format from a BlockFor.fun git registry'
GitOutCommand.args = [
  ...GitCommand.args,
  {
    name: 'output',
    description: 'output file path',
    parse: input => createWriteStream(input),
  },
]
GitOutCommand.flags = GitCommand.flags
GitOutCommand.aliases = ['rm', 'del', 'rm:text', 'del:text']

module.exports = GitOutCommand
