const sqlite = require('sqlite')
const GitCommand = require('@blockforfun/plugin-git/src/git-command')
const {MemRepo, FsRepo} = require('@blockforfun/plugin-git/src/repo')

class BuildSQLiteCommand extends GitCommand {
  async build(repo, url, path, options) {
    this.log(`Opening sqlite DB at ${path}`)
    const db = await sqlite.open(path)
    let count = 0
    try {
      await this.mount(repo, url, options)
      this.log('Dropping old entries')
      await db.run('DROP TABLE IF EXISTS entries')
      this.log('Creating new entries')
      await db.run('CREATE TABLE entries (number VARCHAR, flags VARCHAR, description VARCHAR)')
      for await (const entry of repo.loadEntries(await this.tree(repo, options), options)) {
        await db.run('INSERT INTO entries VALUES (?, ?, ?)', entry.number.join(''), entry.flags.join(','), entry.description)
        count++
      }
    } finally {
      this.log('Closing DB')
      await db.close()
    }
    return count
  }

  async run() {
    const {args, flags} = this.parse(BuildSQLiteCommand)
    const {source, target} = args
    try {
      let count = await this.build(source.protocol ? new MemRepo() : new FsRepo(source.path), source, target, flags)
      this.log(`Built ${count} ${count === 1 ? 'entry' : 'entries'}`)
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
