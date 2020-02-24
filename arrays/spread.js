const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
console.log('combined: ', combined); // [ 1, 2, 3, 4, 5, 6 ]

const combined2 = ['a', ...first, 'b', ...second, 7];
console.log('combined2: ', combined2); // [ 1, 2, 3, 4, 5, 6 ]


// if you wanted to spread a new array of elements, make sure you also add
// the spread operator - ... before the array so as to ass as individual
// elements to the new array otherwise, it'll be added as a an array set
const combined3 = [...first, ...second, [77, 88, 99]];
console.log('combined3: ', combined3); // [ 1, 2, 3, 4, 5, 6, [77, 88, 99] ]

// correct way
const combined4 = [...first, ...second, ...[77, 88, 99]];
console.log('combined4: ', combined4); // [ 1, 2, 3, 4, 5, 6, 77, 88, 99 ]
