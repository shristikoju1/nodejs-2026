const http = require('http');
const userData = [
    {
        name: "Shristi Koju",
        age: 24,
        email: 'kojushristi4@gmail.com'
    },
    {
        name: "Sita Thapa",
        age: 22,
        email: 'sitathapa@gmail.com'
    },
    {
        name: "Gita Thapa",
        age: 23,
        email: 'gitathapa@gmail.com'
    }
]
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userData));
    res.end();
})
server.listen(3600);