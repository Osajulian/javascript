// every method returns a aboolean. It runs the callback function on every element and as soon as it hits
// false on the checking of each element, it returns false.

const numbers = [1, 2, 3];
const numbers1 = [-1, 2, 3, -3];

let allPositives = numbers.every(value => value > 0)
console.log(allPositives); // true

let allPositives1 = numbers1.every(value => value > 0)
console.log(allPositives1); // false

// some is the opposite of every, it checks if there's at least one element in 
// the array that matches the check done by the callback. Checking against the 
// array that produced false while using the every method will produce true if
// you use the some method.

let atLeastOnePositive = numbers1.some(value => value > 0);
console.log(atLeastOnePositive); // true 

// Note: that some of these methods are new in JavaScript and may not be supported by
// older browser but there's a technique to use in bringing them to older browsers called - [To Be Learned]