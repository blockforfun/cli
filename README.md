cli
===

BlockFor.fun CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub](https://img.shields.io/github/stars/blockforfun/cli.svg?logo=github)](https://github.com/blockforfun/cli)
[![Version](https://img.shields.io/npm/v/@blockforfun/cli.svg?logo=npm)](https://npmjs.org/package/@blockforfun/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/cli.svg?logo=npm)](https://npmjs.org/package/@blockforfun/cli)
[![License](https://img.shields.io/npm/l/@blockforfun/cli.svg?logo=github)](https://github.com/blockforfun/cli/blob/master/package.json)

<!-- toc -->
* [Plugins](#plugins)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Plugins

Bundled plugins

* [`@blockforfun/plugin-git`](plugins/plugin-git)
* [`@blockforfun/plugin-export-sqlite`](plugins/plugin-export-sqlite)

# Usage

<!-- usage -->
```sh-session
$ npm install -g @blockforfun/cli
$ blockfun COMMAND
running command...
$ blockfun (-v|--version|version)
@blockforfun/cli/9.1.0 win32-x64 node-v10.10.0
$ blockfun --help [COMMAND]
USAGE
  $ blockfun COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`blockfun delete:json SOURCE PATH`](#blockfun-deletejson-source-path)
* [`blockfun delete:text SOURCE PATH`](#blockfun-deletetext-source-path)
* [`blockfun export:json SOURCE`](#blockfun-exportjson-source)
* [`blockfun export:sqlite SOURCE TARGET`](#blockfun-exportsqlite-source-target)
* [`blockfun export:text SOURCE`](#blockfun-exporttext-source)
* [`blockfun help [COMMAND]`](#blockfun-help-command)
* [`blockfun list:json SOURCE`](#blockfun-listjson-source)
* [`blockfun list:text SOURCE`](#blockfun-listtext-source)
* [`blockfun read:json SOURCE PATH`](#blockfun-readjson-source-path)
* [`blockfun read:text SOURCE PATH`](#blockfun-readtext-source-path)
* [`blockfun write:json SOURCE PATH [INPUT]`](#blockfun-writejson-source-path-input)
* [`blockfun write:text SOURCE PATH [INPUT]`](#blockfun-writetext-source-path-input)

## `blockfun delete:json SOURCE PATH`

deletes entries in json format from a BlockFor.fun git registry

```
USAGE
  $ blockfun delete:json SOURCE PATH

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun rm:json
  $ blockfun del:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\delete\json.js)_

## `blockfun delete:text SOURCE PATH`

deletes entries in text format from a BlockFor.fun git registry

```
USAGE
  $ blockfun delete:text SOURCE PATH

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun rm:text
  $ blockfun del:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\delete\text.js)_

## `blockfun export:json SOURCE`

exports json entries from a BlockFor.fun git registry

```
USAGE
  $ blockfun export:json SOURCE

ARGUMENTS
  SOURCE  git repository URL or path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\export\json.js)_

## `blockfun export:sqlite SOURCE TARGET`

exports sqlite3 database from a BlockFor.fun git registry

```
USAGE
  $ blockfun export:sqlite SOURCE TARGET

ARGUMENTS
  SOURCE  git repository URL or path
  TARGET  path to sqlite3 database

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [@blockforfun/plugin-export-sqlite](https://github.com/blockforfun/cli/blob/v6.0.1/src\commands\export\sqlite.js)_

## `blockfun export:text SOURCE`

exports text entries from a BlockFor.fun git registry

```
USAGE
  $ blockfun export:text SOURCE

ARGUMENTS
  SOURCE  git repository URL or path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\export\text.js)_

## `blockfun help [COMMAND]`

display help for blockfun

```
USAGE
  $ blockfun help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src\commands\help.ts)_

## `blockfun list:json SOURCE`

lists entries in json format from a BlockFor.fun git registry

```
USAGE
  $ blockfun list:json SOURCE

ARGUMENTS
  SOURCE  git repository URL or path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun ls:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\list\json.js)_

## `blockfun list:text SOURCE`

lists entries in text format from a BlockFor.fun git registry

```
USAGE
  $ blockfun list:text SOURCE

ARGUMENTS
  SOURCE  git repository URL or path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun ls:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\list\text.js)_

## `blockfun read:json SOURCE PATH`

reads entries in json format from a BlockFor.fun git registry

```
USAGE
  $ blockfun read:json SOURCE PATH

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun get:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\read\json.js)_

## `blockfun read:text SOURCE PATH`

reads entries in text format from a BlockFor.fun git registry

```
USAGE
  $ blockfun read:text SOURCE PATH

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun get:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\read\text.js)_

## `blockfun write:json SOURCE PATH [INPUT]`

writes entries in json format to a BlockFor.fun git registry

```
USAGE
  $ blockfun write:json SOURCE PATH [INPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path
  INPUT   input file path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun put:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\write\json.js)_

## `blockfun write:text SOURCE PATH [INPUT]`

writes entries in text format to a BlockFor.fun git registry

```
USAGE
  $ blockfun write:text SOURCE PATH [INPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path
  INPUT   input file path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun put:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\write\text.js)_
<!-- commandsstop -->
