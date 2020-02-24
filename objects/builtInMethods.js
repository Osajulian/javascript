//Math
let result = Math.random(); // Math.random() returns a value between 0 & 1

// to get a number between a value of e.g. 0 & 52, you'd multiply Math.random() by 52
let result52 = Math.random() * 52;

// to truncate the rersult (remove the decimal values, use Math.trunc())

result52 = Math.trunc(result52);

console.log(result52);

//Date

let newDate = new Date()
// console.log(newDate); // date with the time


let newDate2 = new Date().toDateString()
// console.log(newDate2); date without the time

//string

let resultString = 'Hello World';

resultString = resultString.toUpperCase()

// console.log(resultString); // HELLO WORLD

resultString = resultString.toLowerCase();

// console.log(resultString); // hello world

// number

let resultNumber = 0 / 0;

console.log(Number.isNaN(resultNumber)); //true
