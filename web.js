const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('html/webjs.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Not Found</h1>');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }

    })
}).listen(3000);