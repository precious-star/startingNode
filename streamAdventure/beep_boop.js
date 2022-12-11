// // console.log("beep boop")

// const fs = require('fs');
// const { stdout } = require('process');
// // const readStream = fs.createReadStream(process.argv[2]);
// // readStream.pipe(stdout);


// const { Readable } = require('stream');
// const { buffer } = require('stream/consumers');


// const { copyFileSync } = require('fs');
// const { Readable, Writable } = require('stream')

// const myStream = new Readable({
//     read() { }
// })
// const myWriteStraeam = new Writable({
//     write(chunk) {
//         console.log("writing: " + chunk.toString());
//     }
// })
// myStream.on('data', (chunk) => {
//     console.log("reading");
//     myWriteStraeam.write(chunk);
// });
// // myStream.push(process.argv[2]);

// // myStream.push("hjgjg");
// process.stdin.pipe(myWriteStraeam);


// myStream.on('data', (chunk) => {

//     myWriteStraeam.write(chunk);
// })

// process.stdin.on('data', (chunk) => {
//     console.log("writing: " + chunk.toString())
//     // myWriteStraeam.write(chunk);
// })

// myStream.push(process.stdout);
// myStream.push(process.stdin)

// myWriteStraeam.write(process.stdin);
// myStream.pipe(myWriteStraeam);
// myWriteStraeam.write(process.stdin);
// myWriteStraeam.pipe(process.stdin);
// myStream.push(process.stdout);




//TRANSFORM STREAM
// const through = require('through2')
// const stream = through(write, end)
// function write(buffer, encoding, next) {
//     this.push(buffer.toString().toUpperCase());
//     next();
// }
// function end(done) {
//     done();
// }
// process.stdin.pipe(stream).pipe(process.stdout)

// LINES
// let count = 1;
// const split2 = require('split2')
// const through2 = require('through2')
// process.stdin
//     .pipe(split2())
//     .pipe(through2(function (line, _, next) {

//         if (count % 2 == 0) {
//             console.log(line.toString().toUpperCase());
//             count++;
//         }
//         else {
//             console.log(line.toString().toLowerCase());
//             count++;
//         }
//         next();
//     }))

// CONCAT
// const concatStream = require('concat-stream');
// const stream = concatStream(concat);
// function concat(buffer) {
//     let tempArray = buffer.toString().split('').reverse().join('');
//     tempArray.slice(-1);
//     process.stdout.write(tempArray);
// }
// process.stdin.pipe(stream);

// HTTP SERVER
// const http = require('http')
// const fs = require('fs')
// const through = require('through2')
// const stream = through(write, end)
// function write(buffer, encoding, next) {
//     this.push(buffer.toString().toUpperCase());
//     next();
// }
// function end(done) {
//     done();
// }
// const server = http.createServer(function (req, res) {
//     req.pipe(stream).pipe(res);
// });
// server.listen(process.argv[2])

// HTTP CLIENT
// const { request } = require('http')
// const options = { method: 'POST' }
// let temp;
// const req = request('http://localhost:8099/', options, (res) => {
//     res.pipe(process.stdout);
// })
// process.stdin.pipe(req);

// WEBSOCKETS
// const WebSocket = require('ws')
// const ws = new WebSocket('ws://localhost:8099')
// const stream = WebSocket.createWebSocketStream(ws)
// stream.write("hello\n");
// stream.pipe(process.stdout);

// HTML STREAM
// const trumpet = require('trumpet')
// const through = require('through')
// const tr = trumpet()
// const stream = tr.select('.loud').createStream()
// stream.pipe(through(function (chunk) {
//     this.queue(chunk.toString().toUpperCase());
// })).pipe(stream)
// process.stdin.pipe(tr).pipe(process.stdout)



// CRYPT(output is not matching, my output is not being displayed in string whereas the matching output should be in string)
// const crypto = require('crypto')
// const stream = crypto.createDecipheriv('aes256', process.argv[2], process.argv[3]);
// process.stdin.pipe(stream).pipe(process.stdout) 

// SECRETZ 
