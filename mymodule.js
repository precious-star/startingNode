const fs = require('fs');
const path = require('path');
module.exports = function (folder, ext, callback11) {
    let filteredList = [];
    let temp = 0;
    fs.readdir(folder, function callback(err, list) {
        if (err) {
            return callback11(err);
        }
        for (let i = 0; i < list.length; i++) {
            let fileName = path.extname(list[i]);
            let filter = "." + ext;
            if (fileName == filter) {
                filteredList[temp] = list[i];
                temp++;
            }
        }
        callback11(null, filteredList)
    })
}