function Car(id) {
    this.carId = id;

}

Car.prototype.start = function() {
    console.log('Start: ' + this.carId);
}

let vehicle = new Car(456);

vehicle.start();

// we use prototypes to take functionality and apply it to our 
// own objects or any of JavaScript's built-in objects can also be extended
// using prototype.

String.prototype.hello = function() {
    return this.toString() + ' hello';
}
console.log('foo'.hello());