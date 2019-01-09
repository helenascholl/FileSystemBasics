const fs = require('fs');
const filepath = '/media/sebi/HTL/2AHITM/SYT/Praxis/';
const filename = 'todo2.txt';

let content = '- Java üben';
content += '\n- Node.js üben';
content += '\n- Gemüse einkaufen';

fs.writeFile(filepath + filename, content, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`File ${filepath}${filename} has been saved!`);
    }
});