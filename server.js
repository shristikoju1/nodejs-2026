const http = require('http');
http.createServer((req, res) => {
    res.write("<h1>This is Shristi Koju on the way to become FULL STACK DEVELOPER.</h1>");
    res.end("HELLO WORLD!!!!!")
}).listen(4800);