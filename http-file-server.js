let http = require('http');
let fs = require('fs');
let server = http.createServer(function (req, res) {

    let temp = fs.createReadStream(process.argv[3]);
    temp.pipe(res);

})

server.listen(process.argv[2]);
