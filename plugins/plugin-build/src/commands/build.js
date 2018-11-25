const sqlite = require('sqlite')
const BaseCommand = require('@blockforfun/plugin-git/src/lib/command')
const {MemRepo, FsRepo} = require('@blockforfun/plugin-git/src/lib/repo')

class BuildCommand extends BaseCommand {
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
  ...BaseCommand.args,
  {
    name: 'target',
    description: 'path to target sqlite3 database',
    required: true,
  },
]
BuildCommand.flags = BaseCommand.flags

module.exports = BuildCommand
