const file = './input.txt';

let fs = require('fs');

fs.readFile(file, 'utf8', function (err, data) {
    if (err) throw err;

    let sp = data.split('\n');

    let global = 0;

    sp.forEach((value) => {
        if (value.startsWith('+')) {
            global += parseInt(value.split('+')[1]);
        } else {
            global -= parseInt(value.split('-')[1]);
        }
    });

    console.log(global);

});