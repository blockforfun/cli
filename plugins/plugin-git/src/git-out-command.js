const {createWriteStream} = require('fs')
const {Transform} = require('stream')
const {flags} = require('@oclif/command')
const GitCommand = require('./git-command')

class GitOutCommand extends GitCommand {
  async init() {
    await super.init()
    const {flags: {output = process.stdout}} = this
    const out = new Transform({
      transform(chunk, encoding, done) {
        done(null, `${chunk}\n`)
      },
    })

    out.pipe(output)

    this.out = out
  }

  async finally(err) {
    const {flags: {output} = {}} = this
    if (output) {
      output.end()
    }
    return super.finally(err)
  }
}

GitOutCommand.description = 'deletes entries in text format from a BlockFor.fun git registry'
GitOutCommand.args = GitCommand.args
GitOutCommand.flags = {
  ...GitCommand.flags,
  output: flags.string({
    char: 'o',
    description: 'output file path',
    parse: input => createWriteStream(input),
  }),
}

module.exports = GitOutCommand
