function startCar(carId) {
    let message = 'Starting...';
    
}

startCar(123);
console.log(message); // error message declare in a block scope

function startTruck(truckId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        console.log(message);
    }
    return startFn(); // closure
}

startTruck(123); // Starting...

function startPlane(planeId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override'
    }
    startFn();
    console.log(message) // Starting... shows up noy override
}

startPlane(123);