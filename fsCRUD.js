const fs = require('fs');

// fs.writeFileSync('files/sample.txt', 'This is a sample file created using fs.writeFileSync.');
// fs.writeFileSync('files/example.txt', 'This is a sample file created using fs.writeFileSync.');

// fs.unlinkSync('files/example.txt');

// const data = fs.readFileSync('files/sample.txt', 'utf-8');
// console.log(data);

// fs.appendFileSync('files/sample.txt', '\nThis line is appended to the sample file using fs.appendFileSync.');

const operation = process.argv[2];
console.log('Operation:', operation);
const name = process.argv[3];
console.log('Name:', name);
const fileName = "files/" + name + ".txt";
console.log('Filename:', fileName);
const content = process.argv[4];
console.log('Content:', content);

if (operation === 'create') {
    fs.writeFileSync(fileName, content);
    console.log('File created successfully.');
} else if (operation === 'read') {
    const data = fs.readFileSync(fileName, 'utf-8');
    console.log('File content:\n', data);
} else if (operation === 'append') {
    fs.appendFileSync(fileName, '\n' + content);
    console.log('Content appended successfully.');
} else if (operation === 'delete') {
    fs.unlinkSync(fileName);
    console.log('File deleted successfully.');
} else {
    console.log('Invalid operation. Use "create", "read", "append", or "delete".');
}