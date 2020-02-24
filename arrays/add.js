
const numbers = [3,4]

// add to the end of the array
numbers.push(5);

console.log(numbers);

// add to the middle (any position)
numbers.splice(1, 0, 'a', 'b')
console.log(numbers); //[ 3, 4, 'a', 'b', 5 ]

// add to the beginning of the array
numbers.unshift(2);
console.log(numbers); // [ 2, 3, 4, 'a', 'b', 5 ]

// neat way to add an element to the end of an array
numbers[numbers.length] = 77;
console.log('numbers via neat: ', numbers);

// Add ( Add a Push of Unshift )
// push into the back 
// unshift into the front

// Remove (Remove this Pop of Shift)
// pop it out of the back 
// shift out of the front

// push & unshift return the length of the array
let entries1 = [1, 2, 3];
let newCount1 = entries1.push(7);
console.log('entries1 after adding 7 via push: ', entries1) // [ 1, 2, 3, 7 ]
console.log('newCount1 length after push: ', newCount1); // 4
console.log('typeof push: ', typeof newCount1) // number


newCount1 = entries1.unshift(77);
console.log('entries1 after adding 77 via unshift: ', entries1) // [ 77, 1, 2, 3, 7 ]
console.log('typeof unshift: ', typeof newCount1); // number


// pop & shift return the removed element
let entries2 = ['7', 2, 3, 4];
console.log('entries2: ', entries2) // [7, 2, 3, 4]
let newCount = entries2.pop();
console.log('newCount pop: ', newCount); // 4
console.log('typeof pop: ', typeof newCount); // number (based on type of pop element)

console.log('entries2: ', entries2) // [7, 2, 3]
newCount = entries2.shift();
console.log('newCount shift: ', newCount); // 7
console.log('typeof shift: ', typeof newCount); // string (based on type of shift element)