// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const product = 'Computer'
console.log(product)

const otherProduct = new String('Phone')
console.log(otherProduct)

/*
primitives (strings, numbers and booleans) are able to act like objects 
and access methods like objects because they have what is known as an 
object wrapper. This object wrapper is what gives them all the 
functionality that we see like the split method for a string. 
When we access a property on a primitive like a string, behind the 
scenes, they are converted to an object

*/