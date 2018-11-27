@blockforfun/plugin-build
=========================

BlockFor.fun CLI build plugin

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub](https://img.shields.io/github/stars/blockforfun/cli.svg?logo=github)](https://github.com/blockforfun/cli/tree/master/plugins/plugin-build)
[![Version](https://img.shields.io/npm/v/@blockforfun/plugin-build.svg?logo=npm)](https://npmjs.org/package/@blockforfun/plugin-build)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/plugin-build.svg?logo=npm)](https://npmjs.org/package/@blockforfun/plugin-build)
[![License](https://img.shields.io/npm/l/@blockforfun/plugin-build.svg?logo=github)](https://github.com/blockforfun/cli/blob/master/plugins/plugin-build/package.json)

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
@blockforfun/plugin-build/3.0.3 win32-x64 node-v10.10.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`oclif-example build:sqlite SOURCE TARGET`](#oclif-example-buildsqlite-source-target)

## `oclif-example build:sqlite SOURCE TARGET`

builds sqlite3 database from a BlockFor.fun git registry

```
USAGE
  $ oclif-example build:sqlite SOURCE TARGET

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target sqlite3 database

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch
```

_See code: [src\commands\build\sqlite.js](https://github.com/blockforfun/cli/blob/v3.0.3/src\commands\build\sqlite.js)_
<!-- commandsstop -->
