const sqlite = require('sqlite')
const GitCommand = require('@blockforfun/plugin-git/src/git-command')

class ExportSQLiteCommand extends GitCommand {
  async export(ref, path, options) {
    this.log(`Opening sqlite DB at ${path}`)
    const db = await sqlite.open(path)
    let count = 0
    try {
      this.log('Dropping old entries')
      await db.run('DROP TABLE IF EXISTS entries')
      this.log('Creating new entries')
      await db.run('CREATE TABLE entries (number VARCHAR, flags VARCHAR, description VARCHAR)')
      for await (const entry of this.repo.loadEntries(ref, options)) {
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
    const {args: {target}, flags: {ref}, flags} = this
    let count = await this.export(ref, target, flags)
    this.log(`Exported ${count} ${count === 1 ? 'entry' : 'entries'}`)
  }
}

ExportSQLiteCommand.description = 'exports sqlite3 database from a BlockFor.fun git registry'
ExportSQLiteCommand.args = [
  ...GitCommand.args,
  {
    name: 'target',
    description: 'path to sqlite3 database',
    required: true,
  },
]
ExportSQLiteCommand.flags = GitCommand.flags

module.exports = ExportSQLiteCommand
