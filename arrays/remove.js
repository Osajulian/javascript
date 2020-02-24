const numbers = [1, 2, 3, 4]

// End - pop()

let first = numbers.pop()
console.log(first);

// begining - shift()
let last = numbers.shift(0, 1);
console.log(last);

// anywhere - splice()
const numbers1 = [1, 2, 3, 4];
let spliced = numbers1.splice(0, 2);
console.log(numbers1);
