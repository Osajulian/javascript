// class

export class Car {
    constructor(id) {
        this.id = id;
    }
}

let car = new Car(123);

console.log(car.id); // 123

car.id = 456;

console.log(car.id); // 456

// class with method - note that we don't need to add the 'function' keyword

class Person {
    constructor(name) {
        this.name = name;
    }
        greeting() {
            console.log(`Hello ${this.name}`);
        };

        announceAge() {
            return 'Age is not a thing';
        }
   
}


let osa = new Person('Osa');

osa.greeting(); // Hello Osa

// inheritance

// base or super class
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    start() {
        return (`Starting: ${this.type}`);
    }
}
// child class - boat

class Boat extends Vehicle {
    constructor(type) {
        super(type);
    }
}

let boat = new Boat('boat');

console.log(boat.start())

// child class - plane

class Plane extends Vehicle {
    constructor(type) {
        super(type);
    }
}

let plane = new Plane('plane');

console.log(plane);

console.log(plane.start());


// access methods on a base or super class from a child class
class Child extends Person {
    announceAge() {
        return 'Age is wisdom';
    }
}

let child = new Child('Dede');

console.log(child.name); // Dede
console.log(child.announceAge()) 
// Age is wisdom - to overide with super's announce age see child2 below
class Child2 extends Person {
    announceAge() {
        return super.announceAge();
    }
}

let child2 = new Child2('Isoken');

console.log(child2.name); // Isoken
console.log(child2.announceAge()) // Age is not a thing


