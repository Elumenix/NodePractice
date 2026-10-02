import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer((request, response) => {
    const { headers, url } = request;
    console.log(url);

    const returnData = (err, data) => {
        if (err) {
            console.error(err);
            response.writeHead(500);
            response.end("Server error");
            return;
        }

        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.end(data);
    }

    if (url === '/')
        fs.readFile('index.html', 'utf8', returnData);
    else if (url === '/about')
        fs.readFile('about.html', 'utf8', returnData);
    else if (url === '/contact-me')
        fs.readFile('contact-me.html', 'utf8', returnData);
    else
        fs.readFile('404.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                response.writeHead(500);
                response.end("Server error");
                return;
            }

            response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
            response.end(data);
        });


}).listen(8080);