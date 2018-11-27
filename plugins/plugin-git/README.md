@blockforfun/plugin-git
===

BlockFor.fun CLI git plugin

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub](https://img.shields.io/github/stars/blockforfun/cli.svg?logo=github)](https://github.com/blockforfun/cli/tree/master/plugins/plugin-git)
[![Version](https://img.shields.io/npm/v/@blockforfun/plugin-git.svg?logo=npm)](https://npmjs.org/package/@blockforfun/plugin-git)
[![Downloads/week](https://img.shields.io/npm/dw/@blockforfun/plugin-git.svg?logo=npm)](https://npmjs.org/package/@blockforfun/plugin-git)
[![License](https://img.shields.io/npm/l/@blockforfun/cli.svg?logo=github)](https://github.com/blockforfun/cli/blob/master/plugins/plugin-git/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @blockforfun/plugin-git
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@blockforfun/plugin-git/2.0.0 win32-x64 node-v10.10.0
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
* [`oclif-example read:json SOURCE PATH [TARGET]`](#oclif-example-readjson-source-path-target)
* [`oclif-example read:text SOURCE PATH [TARGET]`](#oclif-example-readtext-source-path-target)

## `oclif-example list:json SOURCE [TARGET]`

lists entries in json format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example list:json SOURCE [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target text file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ oclif-example ls:json
```

_See code: [src\commands\list\json.js](https://github.com/blockforfun/cli/blob/v2.0.0/src\commands\list\json.js)_

## `oclif-example list:text SOURCE [TARGET]`

lists entries in text format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example list:text SOURCE [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  TARGET  path to target text file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ oclif-example ls
  $ oclif-example ls:text
```

_See code: [src\commands\list\text.js](https://github.com/blockforfun/cli/blob/v2.0.0/src\commands\list\text.js)_

## `oclif-example read:json SOURCE PATH [TARGET]`

reads entries in json format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example read:json SOURCE PATH [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  PATH    path to git file
  TARGET  path to target text file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ oclif-example get:json
```

_See code: [src\commands\read\json.js](https://github.com/blockforfun/cli/blob/v2.0.0/src\commands\read\json.js)_

## `oclif-example read:text SOURCE PATH [TARGET]`

reads entries in text format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example read:text SOURCE PATH [TARGET]

ARGUMENTS
  SOURCE  git source repository URL or path
  PATH    path to git file
  TARGET  path to target text file

OPTIONS
  -f, --fetch=fetch  git fetch repository URL
  -r, --ref=ref      [default: refs/heads/master] git ref to read from
  -s, --spec=spec    [default: refs/heads/*:refs/heads/*] git refspec to fetch

ALIASES
  $ oclif-example get
  $ oclif-example get:text
```

_See code: [src\commands\read\text.js](https://github.com/blockforfun/cli/blob/v2.0.0/src\commands\read\text.js)_
<!-- commandsstop -->
