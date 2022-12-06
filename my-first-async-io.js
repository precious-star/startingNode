const fs = require('fs');
let buf = Buffer.alloc(10);
fs.readFile(process.argv[2], 'utf8', function (err, data) {
    buf = data;
    let temp = buf.toString().split('\n');
    console.log((temp.length) - 1);

});