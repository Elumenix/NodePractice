import http from 'node:http';
import fs from 'node:fs';

const fileLocation = process.argv[3];
http.createServer((req, res) => {
    const readStream = fs.createReadStream(fileLocation, 'utf8');

    readStream.on('data', (text) => {
        res.write(text);
    });

    readStream.on('end', () => {
        res.end();
    });

}).listen(process.argv[2]);
