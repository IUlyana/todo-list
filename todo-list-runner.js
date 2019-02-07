const fs = require('fs');
const parse = require('csv-parse');


const args = process.argv.slice(2);
console.log(`You've passed arguments: [${args.length ? args : 'no args :('}]`);
console.log('---------------------------');


const filePath = 'todo-list-data.csv';
const csvData = [];

console.log('Here is your todos:');
fs.createReadStream(filePath)
    .pipe(parse({ delimiter: ':' }))
    .on('data', function (csvrow) {
        //do something with csvrow
        csvData.push(csvrow[0]);
    })
    .on('end', function () {
        //do something wiht csvData
        console.log(
            csvData
                .slice(1)
                .map(item => (`- ${item}`))
                .join('\n')
        );
    });
