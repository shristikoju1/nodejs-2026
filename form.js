const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
        res.write(`
        <form action="/submit" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email"><br><br>
            <button type="submit">Submit</button>
        </form>
        `);
    } else if (req.url === '/submit') {
        res.write(`
                        <h1>Form submitted successfully!</h1>
                        <button onclick="window.location.href='/'">Go Back</button>
`)
            ;

    }
    res.end();

}).listen(3000)