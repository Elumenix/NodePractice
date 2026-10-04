import http from 'node:http';

http.createServer((req, res) => {
    if (req.method !== 'POST') {
        res.statusCode = 405;
        return res.end();
    }

    res.writeHead(200, { 'content-type': 'text/plain' });

    req.on('data', (chunk) => {
        res.write(String(chunk).toUpperCase());
    });

    req.on('end', () => { res.end() });

}).listen(process.argv[2]);