// Undefined for variable
let name

name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function arguments when the function is called w/o the expected argument(s)
// Undefined as function return default value
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// Null as assigned value
let age = 27

age = null

console.log(age)