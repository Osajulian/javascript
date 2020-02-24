// The Array.from() method creates a new, shallow-copied 
// Array instance from an array-like or iterable object.

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


// Array from a String
Array.from('foo'); 
// [ "f", "o", "o" ]

// Array from an Array-like object (arguments)
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]