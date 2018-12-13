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
@blockforfun/plugin-git/5.1.0 win32-x64 node-v10.10.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`oclif-example delete:json SOURCE PATH`](#oclif-example-deletejson-source-path)
* [`oclif-example delete:text SOURCE PATH`](#oclif-example-deletetext-source-path)
* [`oclif-example list:json SOURCE`](#oclif-example-listjson-source)
* [`oclif-example list:text SOURCE`](#oclif-example-listtext-source)
* [`oclif-example read:json SOURCE PATH`](#oclif-example-readjson-source-path)
* [`oclif-example read:text SOURCE PATH`](#oclif-example-readtext-source-path)
* [`oclif-example write:json SOURCE PATH [INPUT]`](#oclif-example-writejson-source-path-input)
* [`oclif-example write:text SOURCE PATH [INPUT]`](#oclif-example-writetext-source-path-input)

## `oclif-example delete:json SOURCE PATH`

deletes entries in json format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example delete:json SOURCE PATH

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ oclif-example rm:json
  $ oclif-example del:json
```

_See code: [src\commands\delete\json.js](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\delete\json.js)_

## `oclif-example delete:text SOURCE PATH`

deletes entries in text format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example delete:text SOURCE PATH

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ oclif-example rm:text
  $ oclif-example del:text
```

_See code: [src\commands\delete\text.js](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\delete\text.js)_

## `oclif-example list:json SOURCE`

lists entries in json format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example list:json SOURCE

ARGUMENTS
  SOURCE  git repository URL or path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ oclif-example ls:json
```

_See code: [src\commands\list\json.js](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\list\json.js)_

## `oclif-example list:text SOURCE`

lists entries in text format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example list:text SOURCE

ARGUMENTS
  SOURCE  git repository URL or path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ oclif-example ls:text
```

_See code: [src\commands\list\text.js](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\list\text.js)_

## `oclif-example read:json SOURCE PATH`

reads entries in json format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example read:json SOURCE PATH

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ oclif-example get:json
```

_See code: [src\commands\read\json.js](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\read\json.js)_

## `oclif-example read:text SOURCE PATH`

reads entries in text format from a BlockFor.fun git registry

```
USAGE
  $ oclif-example read:text SOURCE PATH

ARGUMENTS
  SOURCE  git repository URL or path
  PATH    git file path

OPTIONS
  -f, --fetch=fetch    git fetch URL
  -o, --output=output  output file path
  -r, --ref=ref        [default: refs/heads/master] git ref
  -s, --spec=spec      [default: refs/heads/*:refs/heads/*] git fetch refspec

ALIASES
  $ oclif-example get:text
```

_See code: [src\commands\read\text.js](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\read\text.js)_

## `oclif-example write:json SOURCE PATH [INPUT]`

writes entries in json format to a BlockFor.fun git registry

```
USAGE
  $ oclif-example write:json SOURCE PATH [INPUT]

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
  $ oclif-example put:json
```

_See code: [src\commands\write\json.js](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\write\json.js)_

## `oclif-example write:text SOURCE PATH [INPUT]`

writes entries in text format to a BlockFor.fun git registry

```
USAGE
  $ oclif-example write:text SOURCE PATH [INPUT]

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
  $ oclif-example put:text
```

_See code: [src\commands\write\text.js](https://github.com/blockforfun/cli/blob/v5.1.0/src\commands\write\text.js)_
<!-- commandsstop -->
