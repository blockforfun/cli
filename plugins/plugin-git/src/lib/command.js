const {Command, flags} = require('@oclif/command')

class BaseCommand extends Command {
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
}

BaseCommand.flags = {
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

module.exports = BaseCommand
