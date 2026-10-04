import fs from 'node:fs';

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    const lines = data.split(/\r?\n/).length - 1;
    console.log(lines);
});