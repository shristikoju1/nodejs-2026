const http = require('http');
http.createServer((req, res) => {
    console.log(req.method);
    if (req.url === '/') {
        res.write('<h1>Welcome to HOME PAGE</h1>');
    } else if (req.url === '/about') {
        res.write('<h1>Welcome to ABOUT PAGE</h1>');
    } else {
        res.write('<h1>404 Not Found</h1>');
    }
    res.end('Ending....');
}).listen(3000);