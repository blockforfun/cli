const { stdout } = process;
const { parse } = require('url');
const sqlite = require('sqlite');
const { MemRepo, FsRepo } = require('./repo');

const [ TARGET, SOURCE, REF = 'refs/heads/master', REFS = 'refs/heads/*:refs/heads/*', FETCH ] = process.argv.slice(2);

const log = str => stdout.write(str);

const fetch = async (repo, url, options) => {
    const { refs = REFS } = options;
    log(`Fetching ${refs} from ${url}\n`);
    return repo.fetch(url, refs, { progress: log });
}

const getTree = async (repo, url, options = { ref: REF, refs: REFS }) => {
    const { ref = REF, fetch: _fetch = url.href } = options;
    if (!url.protocol) {
        log(`Mounting ${url.href}\n`);
    }
    if(url.protocol || options.fetch) {
        await fetch(repo, _fetch, options);
    }
    log(`Reading from ${ref}...\n`);
    const { body: { tree } } = await repo.loadObject(await repo.getRef(ref));
    return tree;
}

const build = async (repo, url, path, options) => {
    log(`Opening ${path}...\n`);
    const db = await sqlite.open(path);
    try {
        log('Dropping old entries...\n');
        await db.run('DROP TABLE IF EXISTS entries');
        log('Creating new entries...\n');
        await db.run('CREATE TABLE entries (number VARCHAR, flags VARCHAR, description VARCHAR)');
        let count = 0;
        for await (const entry of repo.listEntries(await getTree(repo, url, options), options)) {
            await db.run('INSERT INTO entries VALUES (?, ?, ?)', entry.number, entry.flags.join(','), entry.description);
            count++;
        }
        log(`Wrote ${count} ${count === 1 ? 'row' : 'rows'}\n`);
    }
    finally {
        log(`Closing ${path}...\n`);
        await db.close();
    }
    return db;
};

new Promise((resolve, reject) => {
    if (!SOURCE || !TARGET) {
        reject(new Error('You must provide both SOURCE and TARGET'));
    }
    else {
        resolve(parse(SOURCE));
    }
})
.then(source => build(source.protocol ? new MemRepo() : new FsRepo(source.path), source, TARGET, { fetch: FETCH }))
.then(() => log('Done.\n'), e => log(`Error: ${e.message}\n`));
