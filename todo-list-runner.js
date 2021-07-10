// Some code has already been written for you.
const fs = require('fs');

// Command line arguments.
const args = process.argv.slice(2);
console.log(`You've passed arguments: [${args.length ? args : 'no args :('}]`);
console.log('---------------------------');

// Getting our todos from the file.
const filePath = 'todo-list-data.csv';
fs.readFile(filePath, 'utf-8', (err, data) => {
    const todos = data.split('\n').slice(1);
    console.log('Here is your todos:', todos);
});
