// join takes in an optional seperator and the return vakue is a string.

const numbers = [1, 2, 3, 4, 5, 6];

let joined = numbers.join(','); // by default, comma is used if no string seperator is set
console.log(joined); // 1,2,3,4,5,6

// this method goes hand-in-hand with the string split method

let message = 'This is my first message';
let parts = message.split(' '); // returns an array
console.log(parts); //[ 'This', 'is', 'my', 'first', 'message' ]

// using with join
let combined = parts.join('-');
console.log(combined); // This-is-my-first-message
