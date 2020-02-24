const numbers = [1, 2, 3, 4];

//Finding elements - primitive
// indexof returns the index of a given element or -1 if element not
// in array
console.log(numbers.indexOf('c'));

// lasIndexof returns the last index of a given element
numbers.push('a');
console.log(numbers.lastIndexOf('a'));

console.log(numbers.indexOf(2) !== -1) // if this expression returns true, it means this element is in the array
// but this method is ugly, we have a better way - includes

console.log(numbers.includes(1));

// indeof, lastIndexof, includes all have a 2nd optional parameter - 
// that is the starting index, the index
// at which the search will begin.

// passing the optional 2nd parameter - fromIndex
console.log(numbers.indexOf(5, 4));

//Finding elements - reference

// find and findIndex. find returns the 1st element that matches
// the predicate or call back function's boolean test and returns
// 'undefined' otherwise. findIndex does the same but returns the 
// index of the element // and -1 otherwise 
// note: a method like include will provide false result when 
// used on an an object. So if you have an array with reference type,
// you need to use the find method.

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
]

let found = courses.find(course => course.name === 'a');

console.log(found);

//find - will return the first array element that satisfies the 
// condition
let carIdOver200 = carIds.find(car => car.carId > 200);
console.log('first carId > 200: ', carIdOver200);