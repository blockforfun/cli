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
* [`@blockforfun/plugin-build`](plugins/plugin-build)

# Usage

<!-- usage -->
```sh-session
$ npm install -g @blockforfun/cli
$ blockfun COMMAND
running command...
$ blockfun (-v|--version|version)
@blockforfun/cli/7.0.0 win32-x64 node-v10.10.0
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
* [`blockfun read:json SOURCE PATH [TARGET]`](#blockfun-readjson-source-path-target)
* [`blockfun read:text SOURCE PATH [TARGET]`](#blockfun-readtext-source-path-target)

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

_See code: [@blockforfun/plugin-build](https://github.com/blockforfun/cli/blob/v4.0.0/src\commands\build\sqlite.js)_

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
  TARGET  path to target text file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ blockfun ls:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v3.0.0/src\commands\list\json.js)_

## `blockfun list:text SOURCE [TARGET]`

lists entries in text format from a BlockFor.fun git registry

```
USAGE
  $ blockfun list:text SOURCE [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target text file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ blockfun ls
  $ blockfun ls:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v3.0.0/src\commands\list\text.js)_

## `blockfun read:json SOURCE PATH [TARGET]`

reads entries in json format from a BlockFor.fun git registry

```
USAGE
  $ blockfun read:json SOURCE PATH [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  PATH    path to git file
  TARGET  path to target text file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ blockfun get:json
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v3.0.0/src\commands\read\json.js)_

## `blockfun read:text SOURCE PATH [TARGET]`

reads entries in text format from a BlockFor.fun git registry

```
USAGE
  $ blockfun read:text SOURCE PATH [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  PATH    path to git file
  TARGET  path to target text file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ blockfun get
  $ blockfun get:text
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v3.0.0/src\commands\read\text.js)_
<!-- commandsstop -->
