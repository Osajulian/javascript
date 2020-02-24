// use JSON.stringify() to transform data being sent to an api

let car = {
    id: 123,
    style: 'convertible'
};

console.log(JSON.stringify(car)); // {"id":123,"style":"convertible"}

// convert array to JSON

let carIds = [
    { id: 123},
    { id: 456 },
    { id: 789 }
];

console.log(JSON.stringify(carIds)); // [{"id":123},{"id":456},{"id":789}]