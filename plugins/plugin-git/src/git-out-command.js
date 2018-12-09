const {createWriteStream} = require('fs')
const {Transform} = require('stream')
const GitCommand = require('./git-command')

class GitOutCommand extends GitCommand {
  async init() {
    await super.init()
    const {args: {output = process.stdout}} = this
    const out = new Transform({
      transform(chunk, encoding, done) {
        done(null, `${chunk}\n`)
      },
    })

    out.pipe(output)

    this.out = out
  }

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

module.exports = GitOutCommand
