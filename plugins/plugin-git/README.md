@blockforfun/plugin-git
===

BlockFor.fun CLI git plugin

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@blockforfun/plugin-git.svg)](https://npmjs.org/package/@blockforfun/plugin-git)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/plugin-git.svg)](https://npmjs.org/package/@blockforfun/plugin-git)
[![License](https://img.shields.io/npm/l/@blockforfun/cli.svg)](https://github.com/blockforfun/cli/blob/master/plugins/plugin-git/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @blockforfun/plugin-git
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@blockforfun/plugin-git/1.1.1 win32-x64 node-v10.10.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @blockforfun/plugin-git
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@blockforfun/plugin-git/1.1.1 win32-x64 node-v10.10.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example list:json SOURCE [TARGET]`](#oclif-example-listjson-source-target)
* [`oclif-example list:text SOURCE [TARGET]`](#oclif-example-listtext-source-target)

## `oclif-example list:json SOURCE [TARGET]`

lists entries in json format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example list:json SOURCE [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target json file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ oclif-example ls:json
```

_See code: [src\commands\list\json.js](https://github.com/blockforfun/cli/blob/v1.1.1/src\commands\list\json.js)_

## `oclif-example list:text SOURCE [TARGET]`

lists entries in text format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example list:text SOURCE [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target json file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ oclif-example ls
  $ oclif-example ls:text
```

_See code: [src\commands\list\text.js](https://github.com/blockforfun/cli/blob/v1.1.1/src\commands\list\text.js)_
<!-- commandsstop -->
* [`oclif-example list:json SOURCE [TARGET]`](#oclif-example-listjson-source-target)
* [`oclif-example list:text SOURCE [TARGET]`](#oclif-example-listtext-source-target)

## `oclif-example list:json SOURCE [TARGET]`

lists entries in json format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example list:json SOURCE [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target json file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ oclif-example ls:json
```

_See code: [src\commands\list\json.js](https://github.com/blockforfun/cli/blob/v1.1.1/src\commands\list\json.js)_

## `oclif-example list:text SOURCE [TARGET]`

lists entries in text format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example list:text SOURCE [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target json file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ oclif-example ls
  $ oclif-example ls:text
```

_See code: [src\commands\list\text.js](https://github.com/blockforfun/cli/blob/v1.1.1/src\commands\list\text.js)_
<!-- commandsstop -->
