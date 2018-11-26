cli
===

BlockFor.fun CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@blockforfun/cli.svg)](https://npmjs.org/package/@blockforfun/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/cli.svg)](https://npmjs.org/package/@blockforfun/cli)
[![License](https://img.shields.io/npm/l/@blockforfun/cli.svg)](https://github.com/blockforfun/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
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
@blockforfun/cli/4.0.1 win32-x64 node-v10.10.0
$ blockfun --help [COMMAND]
USAGE
  $ blockfun COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @blockforfun/cli
$ blockfun COMMAND
running command...
$ blockfun (-v|--version|version)
@blockforfun/cli/4.0.0 win32-x64 node-v10.10.0
$ blockfun --help [COMMAND]
USAGE
  $ blockfun COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`blockfun build SOURCE TARGET`](#blockfun-build-source-target)
* [`blockfun help [COMMAND]`](#blockfun-help-command)
* [`blockfun list SOURCE [TARGET]`](#blockfun-list-source-target)
* [`blockfun list:json SOURCE [TARGET]`](#blockfun-listjson-source-target)
* [`blockfun list:text SOURCE [TARGET]`](#blockfun-listtext-source-target)

## `blockfun build SOURCE TARGET`

builds sqlite3 database from a BlockFor.fun git registry.

```
USAGE
  $ blockfun build SOURCE TARGET

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target sqlite3 database

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch
```

_See code: [@blockforfun/plugin-build](https://github.com/blockforfun/cli/blob/v2.0.3/src\commands\build.js)_

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

## `blockfun list SOURCE [TARGET]`

lists entries in text from a BlockFor.fun git registry.

```
USAGE
  $ blockfun list SOURCE [TARGET]

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

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v1.0.0/src\commands\list\index.js)_

## `blockfun list:json SOURCE [TARGET]`

lists entries in json from a BlockFor.fun git registry.

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

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v1.0.0/src\commands\list\json.js)_

## `blockfun list:text SOURCE [TARGET]`

lists entries in text from a BlockFor.fun git registry.

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

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v1.0.0/src\commands\list\text.js)_
<!-- commandsstop -->
* [`blockfun build SOURCE TARGET`](#blockfun-build-source-target)
* [`blockfun help [COMMAND]`](#blockfun-help-command)
* [`blockfun json SOURCE`](#blockfun-json-source)
* [`blockfun list SOURCE`](#blockfun-list-source)

## `blockfun build SOURCE TARGET`

builds sqlite3 database from a BlockFor.fun git registry.

```
USAGE
  $ blockfun build SOURCE TARGET

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target sqlite3 database

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch
```

_See code: [@blockforfun/plugin-build](https://github.com/blockforfun/cli/blob/v2.0.0/src\commands\build.js)_

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

## `blockfun json SOURCE`

lists entries in a BlockFor.fun git registry.

```
USAGE
  $ blockfun json SOURCE

ARGUMENTS
  SOURCE  git source repository URL or path

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v0.2.0/src\commands\json.js)_

## `blockfun list SOURCE`

lists entries in a BlockFor.fun git registry.

```
USAGE
  $ blockfun list SOURCE

ARGUMENTS
  SOURCE  git source repository URL or path

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch
```

_See code: [@blockforfun/plugin-git](https://github.com/blockforfun/cli/blob/v0.2.0/src\commands\list.js)_
<!-- commandsstop -->
