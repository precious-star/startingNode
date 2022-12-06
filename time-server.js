let net = require('net');

let date = new Date();
let time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-0" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";

let server = net.createServer(function (socket) {
    socket.write(time);
    socket.end();
})

for (let i = 2; i < process.argv.length; i++) {
    server.listen(process.argv[i]);
}
// server.listen(process.argv[3]);