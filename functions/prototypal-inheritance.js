// Prototypal Inheritance

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

// Note: Recall that arrow functions do not rebind 'this', 
// so why are we able to use 'this' in the foreach arrow function?
// Arrow functions don't bind a 'this' value, it uses whatever the 'this'
// value its parent has. In this example, the parent has the current 'this'
// value for the instance of firstName and age so as long as we are able to 
//access those variables up in the parent's scope, we will be able to 
// access it down below in the child;s scope. Funny thing is that, if we
// used regular function for the foreach, the code would broke. Not yet
// sure but I believe it has to do with function scope's variable shadowing.

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())