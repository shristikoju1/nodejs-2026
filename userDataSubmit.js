function userDataSubmit(req, res) {
    let dataBody = [];

    req.on('data', (chunk) => {
        dataBody.push(chunk);
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Form Submitted Successfully</h2>');

    req.on('end', () => {
        const formData = Buffer.concat(dataBody).toString();
        console.log('Received form data:', formData);
        res.write('<p>Thank you for submitting the form.</p>');
        res.write('<button onclick="window.location.href=\'/\'">Go Back</button>');
        res.end();
    });

}
export default userDataSubmit;    