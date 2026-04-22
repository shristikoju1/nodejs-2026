const fs = require('fs');

function userForm(req, res) {
    fs.readFile('html/form.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
            return; // ✅ Stop execution after error
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data); // ✅ res.end() inside the callback
    });
};
module.exports = userForm;