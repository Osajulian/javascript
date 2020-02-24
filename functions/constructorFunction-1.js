function Car(id) {
    this.carId = id;
    this.start = function() {
        console.log('Start: ' + this.carId);
    }
}

let vehicle = new Car(123);

vehicle.start();