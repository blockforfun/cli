@blockforfun/plugin-build
=========================

BlockFor.fun CLI build plugin

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@blockforfun/plugin-build.svg)](https://npmjs.org/package/@blockforfun/plugin-build)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/plugin-build.svg)](https://npmjs.org/package/@blockforfun/plugin-build)
[![License](https://img.shields.io/npm/l/@blockforfun/plugin-build.svg)](https://github.com/blockforfun/cli/blob/master/plugins/plugin-build/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @blockforfun/plugin-build
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@blockforfun/plugin-build/2.0.3 win32-x64 node-v10.10.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example build SOURCE TARGET`](#oclif-example-build-source-target)

## `oclif-example build SOURCE TARGET`

builds sqlite3 database from a BlockFor.fun git registry.

```
USAGE
  $ oclif-example build SOURCE TARGET

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target sqlite3 database

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch
```

_See code: [src\commands\build.js](https://github.com/blockforfun/cli/blob/v2.0.3/src\commands\build.js)_
<!-- commandsstop -->
