@blockforfun/plugin-export
=========================

BlockFor.fun CLI export plugin

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub](https://img.shields.io/github/stars/blockforfun/cli.svg?logo=github)](https://github.com/blockforfun/cli/tree/master/plugins/plugin-export)
[![Version](https://img.shields.io/npm/v/@blockforfun/plugin-export.svg?logo=npm)](https://npmjs.org/package/@blockforfun/plugin-export)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/plugin-export.svg?logo=npm)](https://npmjs.org/package/@blockforfun/plugin-export)
[![License](https://img.shields.io/npm/l/@blockforfun/plugin-export.svg?logo=github)](https://github.com/blockforfun/cli/blob/master/plugins/plugin-export/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @blockforfun/plugin-export
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@blockforfun/plugin-export/6.0.1 win32-x64 node-v10.10.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`oclif-example export:json SOURCE`](#oclif-example-exportjson-source)
* [`oclif-example export:sqlite SOURCE TARGET`](#oclif-example-exportsqlite-source-target)
* [`oclif-example export:text SOURCE`](#oclif-example-exporttext-source)

## `oclif-example export:json SOURCE`

exports json entries from a BlockFor.fun git registry

```
USAGE
  $ oclif-example export:json SOURCE

ARGUMENTS
  SOURCE  git repository URL or path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [src\commands\export\json.js](https://github.com/blockforfun/cli/blob/v6.0.1/src\commands\export\json.js)_

## `oclif-example export:sqlite SOURCE TARGET`

exports sqlite3 database from a BlockFor.fun git registry

```
USAGE
  $ oclif-example export:sqlite SOURCE TARGET

ARGUMENTS
  SOURCE  git repository URL or path
  TARGET  path to sqlite3 database

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [src\commands\export\sqlite.js](https://github.com/blockforfun/cli/blob/v6.0.1/src\commands\export\sqlite.js)_

## `oclif-example export:text SOURCE`

exports text entries from a BlockFor.fun git registry

```
USAGE
  $ oclif-example export:text SOURCE

ARGUMENTS
  SOURCE  git repository URL or path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [src\commands\export\text.js](https://github.com/blockforfun/cli/blob/v6.0.1/src\commands\export\text.js)_
<!-- commandsstop -->
