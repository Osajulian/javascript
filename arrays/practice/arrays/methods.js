let entries = Array('Trains', 'Planes', 'Automobiles');

// toString()
console.log('entries to string: ', entries.toString()); // Trains,Planes,Automobiles

// slice - returns a new array
let numbers = [1, 2, 3, 4, 5];
numbers.slice(2);
console.log(numbers); // this will still be original array

let newNumbers = numbers.slice(2);
console.log('newNumbers: ', newNumbers); // [ 3, 4, 5 ]

let newNumbersWith2Index = numbers.slice(1, 4);
console.log('newNumbersWith2Index: ', newNumbersWith2Index); // [ 2, 3 ]

// splice - modifies the original array
let splicedNumbers = [6, 7, 8, 9, 10];
splicedNumbers.splice(1, 0, 77); 
console.log('splicedNumbers: ', splicedNumbers); // [1, 77, 8 , 9, 10];

// sort - regular
let regularNumbers = [3, 5, 7, 9, 2, 6, 1, 8, 4];
console.log('regularNumbers', regularNumbers.sort()); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// sort - irregular
// the regular sort will not work for arrays that have elements like this
let irregularNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('irregularNumbers', irregularNumbers.sort()); //  [ 1, 10, 2, 3, 4, 5, 6, 7, 8, 9 ]

// so pass the compare function to the sort method

let sortedIrregularNumbers = irregularNumbers.sort((a,b) => a - b);
console.log('sortedIrregularNumbers: ', sortedIrregularNumbers);

// delete
let avengers = ['Captairl America', 'Iron Man', 'Thor', 'Hulk'];
delete avengers[3];
console.log(avengers); 
// should give you ['Captairl America', 'Iron Man', 'Thor'], right? Nope.
// Watch out for this as it can trip up even even experiebced programmers like moi.
// The value that was in position 3 has been deleted from the array, but the speace that it occupied
// is still there and contains a value of 'undefined'. This mneans that the array still has the
// the same number of elements, and the position can be referenced as an index, but it will
// just return 'undefined'.
// [ 'Captairl America', 'Iron Man', 'Thor', <1 empty item> ]

