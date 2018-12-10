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
* [`@blockforfun/plugin-export`](plugins/plugin-export)

# Usage

<!-- usage -->
```sh-session
$ npm install -g @blockforfun/cli
$ blockfun COMMAND
running command...
$ blockfun (-v|--version|version)
@blockforfun/cli/8.3.0 win32-x64 node-v10.10.0
$ blockfun --help [COMMAND]
USAGE
  $ blockfun COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`blockfun delete:json SOURCE PATH [OUTPUT]`](#blockfun-deletejson-source-path-output)
* [`blockfun delete:text SOURCE PATH [OUTPUT]`](#blockfun-deletetext-source-path-output)
* [`blockfun export:json SOURCE [OUTPUT]`](#blockfun-exportjson-source-output)
* [`blockfun export:sqlite SOURCE OUTPUT`](#blockfun-exportsqlite-source-output)
* [`blockfun export:text SOURCE [OUTPUT]`](#blockfun-exporttext-source-output)
* [`blockfun help [COMMAND]`](#blockfun-help-command)
* [`blockfun list:json SOURCE [OUTPUT]`](#blockfun-listjson-source-output)
* [`blockfun list:text SOURCE [OUTPUT]`](#blockfun-listtext-source-output)
* [`blockfun read:json SOURCE PATH [OUTPUT]`](#blockfun-readjson-source-path-output)
* [`blockfun read:text SOURCE PATH [OUTPUT]`](#blockfun-readtext-source-path-output)
* [`blockfun write:json SOURCE PATH [INPUT]`](#blockfun-writejson-source-path-input)
* [`blockfun write:text SOURCE PATH [INPUT]`](#blockfun-writetext-source-path-input)

## `blockfun delete:json SOURCE PATH [OUTPUT]`

deletes entries in json format from a BlockFor.fun git registry

```
USAGE
  $ blockfun delete:json SOURCE PATH [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun rm:json
  $ blockfun del:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v4.3.0/src\commands\delete\json.js)_

## `blockfun delete:text SOURCE PATH [OUTPUT]`

deletes entries in text format from a BlockFor.fun git registry

```
USAGE
  $ blockfun delete:text SOURCE PATH [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun rm:text
  $ blockfun del:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v4.3.0/src\commands\delete\text.js)_

## `blockfun export:json SOURCE [OUTPUT]`

exports json entries from a BlockFor.fun git registry

```
USAGE
  $ blockfun export:json SOURCE [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [@blockforfun/plugin-export](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\export\json.js)_

## `blockfun export:sqlite SOURCE OUTPUT`

exports sqlite3 database from a BlockFor.fun git registry

```
USAGE
  $ blockfun export:sqlite SOURCE OUTPUT

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  path to sqlite3 database

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [@blockforfun/plugin-export](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\export\sqlite.js)_

## `blockfun export:text SOURCE [OUTPUT]`

exports text entries from a BlockFor.fun git registry

```
USAGE
  $ blockfun export:text SOURCE [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec
```

_See code: [@blockforfun/plugin-export](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\export\text.js)_

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

## `blockfun list:json SOURCE [OUTPUT]`

lists entries in json format from a BlockFor.fun git registry

```
USAGE
  $ blockfun list:json SOURCE [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun ls:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v4.3.0/src\commands\list\json.js)_

## `blockfun list:text SOURCE [OUTPUT]`

lists entries in text format from a BlockFor.fun git registry

```
USAGE
  $ blockfun list:text SOURCE [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun ls:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v4.3.0/src\commands\list\text.js)_

## `blockfun read:json SOURCE PATH [OUTPUT]`

reads entries in json format from a BlockFor.fun git registry

```
USAGE
  $ blockfun read:json SOURCE PATH [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun get:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v4.3.0/src\commands\read\json.js)_

## `blockfun read:text SOURCE PATH [OUTPUT]`

reads entries in text format from a BlockFor.fun git registry

```
USAGE
  $ blockfun read:text SOURCE PATH [OUTPUT]

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path
  OUTPUT  output file path

OPTIONS
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun get:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v4.3.0/src\commands\read\text.js)_

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
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun put:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v4.3.0/src\commands\write\json.js)_

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
  -f, --fetch=fetch  git fetch URL
  -r, --ref=ref      [default: refs/heads/master] git ref
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ blockfun put:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v4.3.0/src\commands\write\text.js)_
<!-- commandsstop -->
