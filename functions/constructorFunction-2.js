const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Andrew', 'Mead', 27)
console.log(me)

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2)

// Note: Rememeber the constructor function does not require
// the 'return' keyword. When it gives us access to 'this',
// it automatically returns 'this'