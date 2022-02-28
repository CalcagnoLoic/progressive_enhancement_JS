
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {
    const readlineSync = require("readline-sync");

    let x = new Number(readlineSync.question("Give me a number : ")) ;

    if (x % 3 == 0) {
        console.log("fizz")
    } else if (x % 5 == 0) {
        console.log("buzz")
    } else if (x % 3 == 0 && x % 3 == 0) {
        console.log("fizzbuzz")
    } else {
        console.log(x)
    }
})();
