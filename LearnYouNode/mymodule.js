import fs from 'node:fs'
import path from 'node:path'

export const listFiles = (folderName, fileExtension, callback) => {
    const fExt = '.' + fileExtension;

    fs.readdir(folderName, (err, data) => {
        if (err) {
            callback(err);
            return;
        }

        let nameArray = [];

        for (let i = 0; i < data.length; i++) {
            if (path.extname(data[i]) === fExt) {
                nameArray.push(data[i]);
            }
        }

        callback(null, nameArray);
    });
};