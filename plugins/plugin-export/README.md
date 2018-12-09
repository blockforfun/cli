@blockforfun/plugin-export
=========================

BlockFor.fun CLI export plugin

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub](https://img.shields.io/github/stars/blockforfun/cli.svg?logo=github)](https://github.com/blockforfun/cli/tree/master/plugins/plugin-export)
[![Version](https://img.shields.io/npm/v/@blockforfun/plugin-export.svg?logo=npm)](https://npmjs.org/package/@blockforfun/plugin-export)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/plugin-export.svg?logo=npm)](https://npmjs.org/package/@blockforfun/plugin-export)
[![License](https://img.shields.io/npm/l/@blockforfun/plugin-export.svg?logo=github)](https://github.com/blockforfun/cli/blob/master/plugins/plugin-export/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
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
@blockforfun/plugin-export/5.0.5 win32-x64 node-v10.10.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @blockforfun/plugin-export
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@blockforfun/plugin-export/5.0.4 win32-x64 node-v10.10.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`oclif-example export:json SOURCE [OUTPUT]`](#oclif-example-exportjson-source-output)
* [`oclif-example export:sqlite SOURCE OUTPUT`](#oclif-example-exportsqlite-source-output)
* [`oclif-example export:text SOURCE [OUTPUT]`](#oclif-example-exporttext-source-output)

## `oclif-example export:json SOURCE [OUTPUT]`

exports json entries from a BlockFor.fun git registry

```
USAGE
  $ oclif-example export:json SOURCE [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ oclif-example rm
  $ oclif-example del
  $ oclif-example rm:text
  $ oclif-example del:text
```

_See code: [src\commands\export\json.js](https://github.com/blockforfun/cli/blob/v5.0.5/src\commands\export\json.js)_

## `oclif-example export:sqlite SOURCE OUTPUT`

exports sqlite3 database from a BlockFor.fun git registry

```
USAGE
  $ oclif-example export:sqlite SOURCE OUTPUT

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  path to sqlite3 database

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [src\commands\export\sqlite.js](https://github.com/blockforfun/cli/blob/v5.0.5/src\commands\export\sqlite.js)_

## `oclif-example export:text SOURCE [OUTPUT]`

exports text entries from a BlockFor.fun git registry

```
USAGE
  $ oclif-example export:text SOURCE [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ oclif-example rm
  $ oclif-example del
  $ oclif-example rm:text
  $ oclif-example del:text
```

_See code: [src\commands\export\text.js](https://github.com/blockforfun/cli/blob/v5.0.5/src\commands\export\text.js)_
<!-- commandsstop -->
* [`oclif-example export:json SOURCE [OUTPUT]`](#oclif-example-exportjson-source-output)
* [`oclif-example export:sqlite SOURCE OUTPUT`](#oclif-example-exportsqlite-source-output)
* [`oclif-example export:text SOURCE [OUTPUT]`](#oclif-example-exporttext-source-output)

## `oclif-example export:json SOURCE [OUTPUT]`

exports json entries from a BlockFor.fun git registry

```
USAGE
  $ oclif-example export:json SOURCE [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ oclif-example rm
  $ oclif-example del
  $ oclif-example rm:text
  $ oclif-example del:text
```

_See code: [src\commands\export\json.js](https://github.com/blockforfun/cli/blob/v5.0.4/src\commands\export\json.js)_

## `oclif-example export:sqlite SOURCE OUTPUT`

exports sqlite3 database from a BlockFor.fun git registry

```
USAGE
  $ oclif-example export:sqlite SOURCE OUTPUT

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  path to sqlite3 database

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [src\commands\export\sqlite.js](https://github.com/blockforfun/cli/blob/v5.0.4/src\commands\export\sqlite.js)_

## `oclif-example export:text SOURCE [OUTPUT]`

exports text entries from a BlockFor.fun git registry

```
USAGE
  $ oclif-example export:text SOURCE [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ oclif-example rm
  $ oclif-example del
  $ oclif-example rm:text
  $ oclif-example del:text
```

_See code: [src\commands\export\text.js](https://github.com/blockforfun/cli/blob/v5.0.4/src\commands\export\text.js)_
<!-- commandsstop -->
