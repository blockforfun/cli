# BlockFor.fun registry CLI

Genrates sqlite3 database from a [BlockFor.fun registry](https://registry.blockfor.fun).

```
index.js $target $source $ref $refs $fetch
```

* `$target`: sqlite db
* `$source`: path or url to `git` repository
* `$ref` (optional - default: `refs/heads/master`): tree ref to read from
* `$refs` (optional - default: `refs/heads/*:refs/heads/*`): refspec to fetch
* `$fetch` (optional): url to force fetch

## Example

```
node index.js ./root.db https://github.com/blockforfun/registry.git refs/heads/first-attempt
```