const {parse} = require('url')
const {Command, flags} = require('@oclif/command')
const {MemRepo, FsRepo} = require('./repo')

class GitCommand extends Command {
  async init() {
    await super.init()
    const {args, flags} = this.parse(this.constructor)
    const {source} = args
    const {fetch = source.href, spec} = flags
    const repo = source.protocol ? new MemRepo() : new FsRepo(source.path)
    this.log(`Mounting ${source.protocol ? 'mem' : 'fs'} repo from ${source.href}`)
    if (source.protocol || flags.fetch) {
      this.log(`Fetching ${spec} from ${fetch}`)
      await repo.fetch(fetch, spec, {progress: p => process.stdout.write(p)})
    }
    this.args = args
    this.flags = flags
    this.repo = repo
  }

  async catch(err) {
    this.error(err.message, {exit: 1})
    return super.catch(err)
  }

  async tree(options) {
    const {repo} = this
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
