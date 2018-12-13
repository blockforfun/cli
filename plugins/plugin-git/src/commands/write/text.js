const {createReadStream} = require('fs')
const toString = require('stream-to-string')
const GitCommand = require('../../git-command')
const GitOutCommand = require('../../git-out-command')
const {parse} = require('../../entry')
const {Readable} = require('stream')

class WriteTextCommand extends GitOutCommand {
  async write(ref, path, body, options) {
    const hash = await this.repo.saveEntry(ref, parse(path, body, options))
    this.out.write(`${hash} ${path}`)
    return 1
  }

  async init() {
    await super.init()
    let {args: {input}} = this

    if (!input) {
      const {stdin, stdin: {isRaw, setRawMode}} = process
      // readable sink we can pass round
      input = new Readable({
        read() {},
      })
      // pipe input to stdout so we get some feedback
      input.pipe(process.stdout)
      // without this, we would only get streams once enter is pressed
      if (setRawMode) stdin.setRawMode(true)
      // resume stdin in the parent process (node app won't quit all by itself unless an error or process.exit() happens)
      stdin.resume()
      // you don't want binary, do you?
      stdin.setEncoding('utf8')
      // on any data into stdin
      stdin.on('data', key => {
        // ctrl-c (end of text)
        if (key === '\u0003') {
          // pause stdin so we don't hold up the terminal
          stdin.pause()
          // restore rawMode
          if (setRawMode) stdin.setRawMode(Boolean(isRaw))
          // signal EOT
          input.push(null)
        } else {
          // push the key to input all normal like
          input.push(key)
        }
      })
      // singnal EOT when piped stdin closes
      stdin.on('close', () => input.push(null))
    }
    // store in stream so we can read() from it later
    this.in = input
  }

  async finally(err) {
    const {in: input} = this
    // clean up in stream resources
    if (input) {
      input.destroy()
    }
    return super.finally(err)
  }

  async run() {
    const {args: {path}, flags: {ref}, flags} = this
    const count = await this.write(ref, path, await toString(this.in), flags)
    this.log(`Wrote ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

WriteTextCommand.description = 'writes entries in text format to a BlockFor.fun git registry'
WriteTextCommand.args = [
  ...GitCommand.args,
  {
    name: 'path',
    description: 'git file path',
    required: true,
  },
  {
    name: 'input',
    description: 'input file path',
    parse: input => createReadStream(input),
  },
]
WriteTextCommand.flags = GitCommand.flags
WriteTextCommand.aliases = ['put:text']

module.exports = WriteTextCommand
