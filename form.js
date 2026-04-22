const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('html/form.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Not Found</h1>');
        }

        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        } else if (req.url === '/submit') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<h1>Form Submitted Successfully</h1>
                <p> Thank you for submitting the form.</p> 
                    <button onclick = "window.location.href=\'/\'" > Go Back</button> `);
        }
        res.end();
    })
}).listen(3000)