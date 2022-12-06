const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], function callback(err, list) {
    for (let i = 0; i < list.length; i++) {
        let fileName = path.extname(list[i]);
        // console.log("filename", fileName);
        let filter = "." + process.argv[3];
        // console.log(process.argv[3]);
        if (fileName == filter) {
            console.log(list[i]);
        }
    }
})

