import http from 'node:http';

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');

    response.on('error', (error) => {
        console.error(error);
    });

    response.on('data', (data) => {
        console.log(data);
    });
}).on('error', console.error);