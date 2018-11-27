cli
===

BlockFor.fun CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@blockforfun/cli.svg)](https://npmjs.org/package/@blockforfun/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/cli.svg)](https://npmjs.org/package/@blockforfun/cli)
[![License](https://img.shields.io/npm/l/@blockforfun/cli.svg)](https://github.com/blockforfun/cli/blob/master/package.json)

<!-- toc -->

<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @blockforfun/cli
$ blockfun COMMAND
running command...
$ blockfun (-v|--version|version)
@blockforfun/cli/5.0.0 win32-x64 node-v10.10.0
$ blockfun --help [COMMAND]
USAGE
  $ blockfun COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`blockfun build:sqlite SOURCE TARGET`](#blockfun-buildsqlite-source-target)
* [`blockfun help [COMMAND]`](#blockfun-help-command)
* [`blockfun list:json SOURCE [TARGET]`](#blockfun-listjson-source-target)
* [`blockfun list:text SOURCE [TARGET]`](#blockfun-listtext-source-target)

## `blockfun build:sqlite SOURCE TARGET`

builds sqlite3 database from a BlockFor.fun git registry

```
USAGE
  $ blockfun build:sqlite SOURCE TARGET

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target sqlite3 database

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch
```

_See code: [@blockforfun/plugin-build](https://github.com/blockforfun/cli/blob/v3.0.0/src\commands\build\sqlite.js)_

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

## `blockfun list:json SOURCE [TARGET]`

lists entries in json format from a BlockFor.fun git registry

```
USAGE
  $ blockfun list:json SOURCE [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target json file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ blockfun ls:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v1.1.1/src\commands\list\json.js)_

## `blockfun list:text SOURCE [TARGET]`

lists entries in text format from a BlockFor.fun git registry

```
USAGE
  $ blockfun list:text SOURCE [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target json file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ blockfun ls
  $ blockfun ls:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v1.1.1/src\commands\list\text.js)_
<!-- commandsstop -->
