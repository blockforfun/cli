const {parse} = require('url')
const {Command, flags} = require('@oclif/command')

class GitCommand extends Command {
  async mount(repo, url, options) {
    const {fetch = url.href, spec} = options
    this.log(`Mounting ${url.protocol ? 'mem' : 'fs'} repo from ${url.href}`)
    if (url.protocol || options.fetch) {
      this.log(`Fetching ${spec} from ${fetch}`)
      await repo.fetch(fetch, spec, {progress: p => process.stdout.write(p)})
    }
  }

  async tree(repo, options) {
    const {ref} = options
    this.log(`Resolving ${ref}`)
    const hash = await repo.getRef(ref)
    if (!hash) {
      throw new Error(`Can't find ${ref}`)
    }
    this.log(`Reading ${hash}`)
    const commit = await repo.loadCommit(hash)
    return commit.tree
  }
}

GitCommand.args = [
  {
    name: 'source',
    description: 'git repository URL or path',
    parse: input => parse(input),
    required: true,
  },
]

GitCommand.flags = {
  ref: flags.string({
    char: 'r',
    description: 'git ref',
    default: 'refs/heads/master',
  }),
  spec: flags.string({
    char: 's',
    description: 'git fetch refspec',
    default: 'refs/heads/*:refs/heads/*',
  }),
  fetch: flags.string({
    char: 'f',
    description: 'git fetch URL',
  }),
}

module.exports = GitCommand
