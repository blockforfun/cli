const { isMatch } = require('micromatch');

const GLOB = '**/*.txt';
const DELIM = /[,\s]+/;
const NUMBER = /\/|\.txt$/g;

module.exports = entriesMixin = repo => {
    return class EntriesRepo extends repo {
        constructor(...args) {
            super(...args);
        }
        async *listEntries(tree, options = { glob: GLOB, number: NUMBER, delim: DELIM }) {
            const { glob = GLOB, number = NUMBER, delim = DELIM } = options;
            for await (const file of super.listFiles(tree)) {
                const path = file.path.join('/');
                if (isMatch(path, glob)) {
                    const body = await super.loadText(file.hash);
                    const [ flags, description ] = body.split('\n');
                    yield {
                        id: path.replace(number, ''),
                        flags: flags.split(delim),
                        description,
                        file
                    };
                }
            }
        }
    }
}
