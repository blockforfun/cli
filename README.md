@blockforfun/cli
================

BlockFor.fun CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@blockforfun/cli.svg)](https://npmjs.org/package/@blockforfun/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/cli.svg)](https://npmjs.org/package/@blockforfun/cli)
[![License](https://img.shields.io/npm/l/@blockforfun/cli.svg)](https://github.com/blockforfun/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @blockforfun/cli
$ blockfun COMMAND
running command...
$ blockfun (-v|--version|version)
@blockforfun/cli/1.0.3 win32-x64 node-v10.10.0
$ blockfun --help [COMMAND]
USAGE
  $ blockfun COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`blockfun build TARGET SOURCE`](#blockfun-build-target-source)
* [`blockfun help [COMMAND]`](#blockfun-help-command)

## `blockfun build TARGET SOURCE`

Builds sqlite3 database from a BlockFor.fun git registry.

```
USAGE
  $ blockfun build TARGET SOURCE

ARGUMENTS
  TARGET  path to target sqlite3 database
  SOURCE  git source repository URL or path

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch
```

_See code: [commands\build.js](https://github.com/blockforfun/registry/blob/v1.0.3/commands\build.js)_

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
<!-- commandsstop -->
