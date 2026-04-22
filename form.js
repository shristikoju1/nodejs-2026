const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {
    fs.readFile('html/form.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Not Found</h1>');
        }

        if (req.url === '/') {
            // res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        } else if (req.url === '/submit') {
            let dataBody = [];

            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            req.on('end', () => {
                const formData = Buffer.concat(dataBody).toString();
                const parsedData = querystring.parse(formData);
                console.log('Received form data:', parsedData);

                // ✅ Move res.writeHead and res.write INSIDE here
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(`
            <h1>Form Submitted Successfully</h1>
            <p>Name: ${parsedData.name}</p>
            <p>Email: ${parsedData.email}</p>
            <p>Thank you for submitting the form.</p>
            <button onclick="window.location.href='/'">Go Back</button>
        `);
                res.end(); // ✅ Always end the response
            });
        }
    })
}).listen(3000)