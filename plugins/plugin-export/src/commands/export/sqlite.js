const sqlite = require('sqlite')
const GitCommand = require('@blockforfun/plugin-git/src/git-command')
const {MemRepo, FsRepo} = require('@blockforfun/plugin-git/src/repo')

class ExportSQLiteCommand extends GitCommand {
  async export(repo, path, options) {
    this.log(`Opening sqlite DB at ${path}`)
    const db = await sqlite.open(path)
    let count = 0
    try {
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
    const {args: {source, output}, flags: options} = this
    const repo = source.protocol ? new MemRepo() : new FsRepo(source.path)
    await this.mount(repo, source, options)
    let count = await this.export(repo, output, options)
    this.log(`Built ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

ExportSQLiteCommand.description = 'exports sqlite3 database from a BlockFor.fun git registry'
ExportSQLiteCommand.args = [
  ...GitCommand.args,
  {
    name: 'output',
    description: 'path to sqlite3 database',
    required: true,
  },
]
ExportSQLiteCommand.flags = GitCommand.flags

module.exports = ExportSQLiteCommand
