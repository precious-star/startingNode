const mymodule = require('./mymodule.js');
mymodule(process.argv[2], process.argv[3], function (arr, result) {
    if (arr) {
        console.log(arr);
    }
    else {

        result.forEach(element => console.log(element));
    }
})