import { listFiles } from './mymodule.js';

listFiles(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        return console.log(err);
    }

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});
