let first = [1, 2, 3];
const second = [4, 5, 6];

// concat()
let combined = first.concat(second);
console.log('combined: ', combined); //combined:  [ 1, 2, 3, 4, 5, 6 ]

// Note that this does not change the original array - 'first', it simply creates another
// array combining the 2 arrays. You can use assignment to update 'first' array to this
// new array.
first = first.concat(second, 9, [7]);
console.log('new first after concat assignment: ', first);

// slice()
let sliced = combined.slice(); //without arguments - copies everything
console.log('sliced: ', sliced) // sliced:  [ 1, 2, 3, 4, 5, 6 ]

let sliced2 = combined.slice(2); //with 1st argument - copies from that index
console.log('sliced2: ', sliced2) //sliced2:  [ 3, 4, 5, 6 ]

let sliced3 = combined.slice(2,3); //with 2 arguments - copies start to finish
console.log('sliced3: ', sliced3) // sliced3:  [ 3 ]

// note: that if you are dealing with primitive values, they woulkd be copied to a new
// array and the original will be untouched. If you are dealing with objects in your 
// array, the objects themselves are not copied, the references are copied - meaning
// the elements in both input and output arrays will point to the same object. example below

const third = [{id: 1}];
const fourth = [4, 5, 6];

// concat()
let combined2 = third.concat(fourth);
third[0].id = 10; // changing the object 'third' id is reflected in combined2 as they are pointing to same reference
console.log('combined2: ', combined2); // combined2:  [ { id: 10 }, 4, 5, 6 ]

// note: that this also applied to the slice() method.
// note: ES6 introduced spread which does similar