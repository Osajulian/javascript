// filter returns a new array

const numbers = [-1, 2, 3, -3];

let filtered = numbers.filter(n => n >= 0)

console.log(filtered); // [ 2, 3 ]

// array filtering

let convertibles = carIds.filter(car => car.style === 'convertible');

console.log('Convertible: ', convertibles);

// array testing - every (this applies to the entire array, all elements must
// satisfy the condition as this method returns a single true or false value for 
// the entire array)