const fs = require('fs');
const filename = 'todo.txt';

console.log(`Entire content of ${filename} will be read asynchronously.`);

fs.readFile(filename, {encoding: 'utf8'}, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(`Reading ${filename} finished successfully.

Content of ${filename}:
${data}`);
    }
});

console.log(`Meanwhile Node.js app can do something else.
...`);