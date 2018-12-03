const file = './input2.txt';

let fs = require('fs');

fs.readFile(file, 'utf8', function (err, data) {
    if (err) throw err;

    let sp = data.split('\n');

    let numberOf2 = 0;
    let numberOf3 = 0;
    sp.forEach((value) => {
        let freq = {
            "a": 0,
            "b": 0,
            "c": 0,
            "d": 0,
            "e": 0,
            "f": 0,
            "g": 0,
            "h": 0,
            "i": 0,
            "j": 0,
            "k": 0,
            "l": 0,
            "m": 0,
            "n": 0,
            "o": 0,
            "p": 0,
            "q": 0,
            "r": 0,
            "s": 0,
            "t": 0,
            "u": 0,
            "v": 0,
            "w": 0,
            "x": 0,
            "y": 0,
            "z": 0
        };

        [...value].forEach(char => {
            let actual = freq[char];
            actual++;
            freq[char] = actual;
        });

        let contains2 = false;
        let contains3 = false;
        Object.entries(freq).forEach(([key, value]) => {
                if (value === 2) {
                    contains2 = true;
                }
                if (value === 3) {
                    contains3 = true;
                }
            }
        )

        if (contains2) {
            numberOf2++;
        }

        if (contains3) {
            numberOf3++;
        }
    });

    //console.log(cantidad2);
    //console.log(cantidad3);
    console.log(numberOf2 * numberOf3);
});
