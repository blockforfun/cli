@blockforfun/plugin-git
=========================

BlockFor.fun CLI git plugin

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@blockforfun/plugin-build.svg)](https://npmjs.org/package/@blockforfun/plugin-build)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/plugin-build.svg)](https://npmjs.org/package/@blockforfun/plugin-build)
[![License](https://img.shields.io/npm/l/@blockforfun/plugin-build.svg)](https://github.com/blockforfun/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @blockforfun/plugin-git
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@blockforfun/plugin-git/0.2.1 win32-x64 node-v10.10.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example json SOURCE`](#oclif-example-json-source)
* [`oclif-example list SOURCE`](#oclif-example-list-source)

## `oclif-example json SOURCE`

lists entries in a BlockFor.fun git registry.

```
USAGE
  $ oclif-example json SOURCE

ARGUMENTS
  SOURCE  git source repository URL or path

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch
```

_See code: [src\commands\json.js](https://github.com/blockforfun/cli/blob/v0.2.1/src\commands\json.js)_

## `oclif-example list SOURCE`

lists entries in a BlockFor.fun git registry.

```
USAGE
  $ oclif-example list SOURCE

ARGUMENTS
  SOURCE  git source repository URL or path

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch
```

_See code: [src\commands\list.js](https://github.com/blockforfun/cli/blob/v0.2.1/src\commands\list.js)_
<!-- commandsstop -->
