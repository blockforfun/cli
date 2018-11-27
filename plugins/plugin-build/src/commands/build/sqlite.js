const sqlite = require('sqlite')
const GitCommand = require('@blockforfun/plugin-git/src/lib/git-command')
const {MemRepo, FsRepo} = require('@blockforfun/plugin-git/src/lib/repo')

class BuildSQLiteCommand extends GitCommand {
  async build(repo, url, path, options) {
    this.log(`Opening ${path}...`)
    const db = await sqlite.open(path)
    let count = 0
    try {
      this.log('Dropping old entries...')
      await db.run('DROP TABLE IF EXISTS entries')
      this.log('Creating new entries...')
      await db.run('CREATE TABLE entries (number VARCHAR, flags VARCHAR, description VARCHAR)')
      for await (const entry of repo.listEntries(await this.tree(repo, url, options), options)) {
        await db.run('INSERT INTO entries VALUES (?, ?, ?)', entry.number.join(''), entry.flags.join(','), entry.description)
        count++
      }
    } finally {
      this.log(`Closing ${path}...`)
      await db.close()
    }
    return count
  }

  async run() {
    const {args, flags} = this.parse(BuildSQLiteCommand)
    const {source, target: path} = args
    try {
      let count = await this.build(source.protocol ? new MemRepo() : new FsRepo(source.path), source, path, flags)
      this.log(`Wrote ${count} ${count === 1 ? 'entry' : 'entries'}`)
    } catch (error) {
      this.error(error.message, {exit: 1})
    }
  }
}

BuildSQLiteCommand.description = 'builds sqlite3 database from a BlockFor.fun git registry'
BuildSQLiteCommand.args = [
  ...GitCommand.args,
  {
    name: 'target',
    description: 'path to target sqlite3 database',
    required: true,
  },
]
BuildSQLiteCommand.flags = GitCommand.flags

module.exports = BuildSQLiteCommand
