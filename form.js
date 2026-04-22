const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {

    if (req.url === '/') {
        // Only read the file when needed
        fs.readFile('html/form.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>');
                return; // ✅ Stop execution after error
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data); // ✅ res.end() inside the callback
        });

    } else if (req.url === '/submit') {
        let dataBody = [];

        req.on('data', (chunk) => {
            dataBody.push(chunk);
        });

        req.on('end', () => {
            const formData = Buffer.concat(dataBody).toString();
            const parsedData = querystring.parse(formData);
            console.log('Received form data:', parsedData);
            const dataText = `Name: ${parsedData.name}\nEmail: ${parsedData.email}`;
            // ✅ Create 'text/' directory if it doesn't exist
            if (!fs.existsSync('text')) {
                fs.mkdirSync('text');
            }

            // fs.writeFileSync("text/" + parsedData.name + ".txt", parsedData.email);
            fs.writeFile("text/" + parsedData.name + ".txt", dataText, (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('<h1>500 Internal Server Error</h1>');
                    return; // ✅ Stop execution after error
                }
            });
            console.log('Form data saved to file:', parsedData.name + ".txt");

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
        <h1>Form Submitted Successfully</h1>
        <p>Name: ${parsedData.name}</p>
        <p>Email: ${parsedData.email}</p>
        <p>Thank you for submitting the form.</p>
        <button onclick="window.location.href='/'">Go Back</button>
    `);
        });
    }

}).listen(3000, () => console.log('Server running on port 3000'));