const {DELIM, EXT} = require('./const')

exports.parse = (path, body, options = {ext: EXT, delim: DELIM}) => {
  const {ext = EXT, delim = DELIM} = options
  const entry = {}
  if (path) {
    entry.number = path.replace(ext, '').split('/').filter(part => part.length !== 0)
  }
  if (body) {
    const [flags, description] = body.trim().split('\n').map(line => line.trim())
    entry.flags = flags.split(delim).sort()
    entry.description = description
  }
  return entry
}

exports.compile = entry => {
  const file = {}
  if (entry.number) {
    file.path = `${entry.number.join('/')}.txt`
  }
  if (entry.flags) {
    file.body = `${entry.flags.join(',')}\n${entry.description || ''}`
  }
  return file
}
