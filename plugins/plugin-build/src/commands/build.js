const {parse} = require('url')
const sqlite = require('sqlite')
const {Command, flags} = require('@oclif/command')
const {MemRepo, FsRepo} = require('../lib/repo')

class BuildCommand extends Command {
  async fetch(repo, url, options) {
    const {spec} = options
    this.log(`Fetching ${spec} from ${url}`)
    return repo.fetch(url, spec, {progress: p => process.stdout.write(p)})
  }

  async tree(repo, url, options) {
    const {ref, fetch: _fetch = url.href} = options
    if (!url.protocol) {
      this.log(`Mounting ${url.href}`)
    }
    if (url.protocol || options.fetch) {
      await this.fetch(repo, _fetch, options)
    }
    this.log(`Reading from ${ref}...`)
    const object  = await repo.loadObject(await repo.getRef(ref))
    if (!object) {
      throw new Error(`Can't find ${ref}`)
    }
    return object.body.tree
  }

  async build(repo, url, path, options) {
    this.log(`Opening ${path}...`)
    const db = await sqlite.open(path)
    try {
      this.log('Dropping old entries...')
      await db.run('DROP TABLE IF EXISTS entries')
      this.log('Creating new entries...')
      await db.run('CREATE TABLE entries (number VARCHAR, flags VARCHAR, description VARCHAR)')
      let count = 0
      for await (const entry of repo.listEntries(await this.tree(repo, url, options), options)) {
        await db.run('INSERT INTO entries VALUES (?, ?, ?)', entry.number.join(''), entry.flags.join(','), entry.description)
        count++
      }
      this.log(`Wrote ${count} ${count === 1 ? 'row' : 'rows'}`)
    } finally {
      this.log(`Closing ${path}...`)
      await db.close()
    }
    return db
  }

  async run() {
    const {args, flags} = this.parse(BuildCommand)
    const {source, target} = args
    try {
      await this.build(source.protocol ? new MemRepo() : new FsRepo(source.path), source, target, flags)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

BuildCommand.description = 'builds sqlite3 database from a BlockFor.fun git registry.'
BuildCommand.args = [
  {
    name: 'target',
    description: 'path to target sqlite3 database',
    required: true,
  },
  {
    name: 'source',
    description: 'git source repository URL or path',
    parse: input => parse(input),
    required: true,
  },
]
BuildCommand.flags = {
  ref: flags.string({
    char: 'r',
    description: 'git ref to read from',
    default: 'refs/heads/master',
  }),
  spec: flags.string({
    char: 's',
    description: 'git refspec to fetch',
    default: 'refs/heads/*:refs/heads/*',
  }),
  fetch: flags.string({
    char: 'f',
    description: 'git fetch repository URL',
  }),
}

module.exports = BuildCommand
