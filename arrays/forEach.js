
// foreach()

let carIds = [
    { carId: 123, style: 'sedan'},
    { carId: 456, style: 'convertible' },
    { carId: 789, style: 'sedan' }
];

carIds.forEach(car => console.log(car));


carIds.forEach((car, index) => console.log(car, index));



