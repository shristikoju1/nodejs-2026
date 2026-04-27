const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log('Received request for:', req.url);

    if (req.url === '/') {
        fs.readFile("html/home.html", 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Internal Server Error');
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });

    } else if (req.url === '/home.css') {
        fs.readFile("html/home.css", 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                return res.end('CSS Not Found');
            }

            res.writeHead(200, { 'Content-Type': 'text/css' });
            console.log('Serving CSS file');
            res.end(data);
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }

}).listen(3000);