const http = require('http');
const userForm = require('./userForm');
const userDataSubmit = require('./userDataSubmit').default;

http.createServer((req, res) => {
    if (req.url === '/') {
        userForm(req, res);
    } else if (req.url === '/submit') {
        userDataSubmit(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
}).listen(3000, () => {
    console.log('Server is running on port 3000');
});