import fs from 'node:fs';

const searchTerm = '.' + process.argv[3].toString();

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        return console.log(err);
    }

    for (let i = 0; i < list.length; i++) {
        if (list[i].includes(searchTerm, Math.max(0, list[i].length - searchTerm.length))) {
            console.log(list[i]);
        }
    }
});