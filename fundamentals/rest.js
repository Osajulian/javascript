function sendCars(...allCarIds) {
    allCarIds.forEach(id => console.log(id));
}

sendCars(100, 200, 300); // 100, 200, 300


// rest parameter must be the last parameter in the function's parameter list
function sendCarsDay(day, ...allCarIds) {
    allCarIds.forEach(id => console.log(id));
}

sendCarsDay('Monday', 100, 200, 300); // 100, 200, 300

