// have doubth in this solution 

var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

module.exports = function (cmd, args) {
    var ps = spawn(cmd, args);
    return duplexer(ps.stdin, ps.stdout);
}; 

// solution get after submiting my solution
// const { spawn } = require('child_process')
//     const duplexer = require('duplexer2')
    
//     module.exports = function (cmd, args) {
//       const ps = spawn(cmd, args)
//       return duplexer(ps.stdin, ps.stdout)
//     }
