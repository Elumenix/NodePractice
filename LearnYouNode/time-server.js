import net from 'node:net';

net.createServer((socket) => {
    let date = new Date();
    const dateString = 
    date.getFullYear() + '-' + 
    (date.getMonth() + 1).toString().padStart(2, '0') + '-' + 
    date.getDate().toString().padStart(2, '0') + ' ' + 
    date.getHours().toString().padStart(2, '0') + ':' + 
    date.getMinutes().toString().padStart(2, '0');

    socket.end(dateString + '\n');

}).listen(process.argv[2]);