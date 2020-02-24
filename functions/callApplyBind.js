// call
let car = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
}

let newCar = { carId: 456};

let newCarId = car.getId.call(newCar);

console.log(newCarId);

// apply - the difference between call and apply is that apply accepts an array of arguments

let train = {
    trainId: 123,
    getId: function(prefix) {
        return prefix + this.trainId;
    }
}

let newTrain = { trainId: 107 };

let newTrainId = train.getId.apply(newTrain, ['ID: ']);

console.log(newTrainId);

// bind does what call does but makes a copy of the object function

let plane = {
    planeId: 777,
    getId: function() {
        return this.planeId
    }
};

let newPlane = { planeId: 1207};

let newPlaneId = plane.getId.bind(newPlane);

console.log(newPlaneId());


