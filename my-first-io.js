const fs = require('fs');
let buf = Buffer.alloc(10);
buf = fs.readFileSync(process.argv[2]);
let temp = buf.toString().split('\n');
console.log((temp.length) - 1);