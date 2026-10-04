import http from 'node:http';
import { URL } from 'node:url';

http.createServer((req, res) => {
    req.on('error', err => {
        console.error(err);
        res.statusCode = 500;
        return res.end();
    });

    if (req.method !== 'GET') {
        res.statusCode = 405;
        return res.end();
    }

    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname !== '/api/parsetime' && url.pathname !== '/api/unixtime') {
        res.statusCode = 404;
        return res.end();
    }

    res.writeHead(200, {'content-type': 'application/json'});
    const date = new Date(url.searchParams.get('iso'));

    if (url.pathname === '/api/parsetime') {
        const jsonData = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };

        res.write(JSON.stringify(jsonData));
    }
    else if (url.pathname === '/api/unixtime') {
        const jsonData = {
            unixtime: date.getTime()
        };

        res.write(JSON.stringify(jsonData));
    }

    res.end();

}).listen(process.argv[2]);