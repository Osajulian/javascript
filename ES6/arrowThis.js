// Arrow functions do not rebind 'this'. When we create methods
// on object properties, we should stick to regular functions
// as arrow functions do not rebind 'this;.

const car1 = {
    color: 'red',
    getSummary: function () {
        return `The color of car1 is ${this.color}` 
        // The color of car1 is red
    }
}
console.log(car1.getSummary());

const car2 = {
    color: 'white',
    getSummary:  () => {
        return `The color of car2 is ${this.color}` 
        // The color of car2 is undefined
    }
}
console.log(car2.getSummary());

// Alternatively, you can use the method definition syntax like this:
const car3 = {
    color: 'blue',
    getSummary() {
        return `The color of car3 is ${this.color}` 
        // The color of car3 is blue
    }
}
console.log(car3.getSummary());