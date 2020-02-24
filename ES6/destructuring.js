// arrays
let carIds = [1, 2, 3];

let [car1, car2, car3] = carIds;

console.log(car1, car2, car3); // 1, 2, 3

let boatIds = [4, 5, 6];

let boat1, remainingBoats;

[boat1, ...remainingBoats] = boatIds;

console.log(boat1, remainingBoats) // 4, [5, 6]

let bikeIds = [7, 8, 9];

let [, ...remainingBikes] = bikeIds; 

console.log(remainingBikes); // [8, 9]

// objects

let car = {
    id: 500,
    style: 'convertible'
}

let {id, style} = car;

console.log(id, style); // 500, 'convertible'

let train = {
    engineId: 700,
    engine: 'electric'
}

let engineId, engine;

// { id, engine } = train; // this will prodice an error as the curly braces 
// is used to create a code block

({ engineId, engine} = train); // put destructuring line between a parenthensis

console.log(engineId, engine); // 700, 'electric'

// destrucring objects passed to a function

const circle = {
    label: 'circleX',
    radius: 2.7656
}

const circleArea = ({radius}) => {

    // fake calculation
     return radius * 7;
}

   


console.log(circleArea(circle));

// NOT WORKING
// you can add default arguments like with example - 'precision'

const circleArea2 = ({radius}, {precision = 2}) => {
    // fake calculation
    return radius * 7.124.toFixed(precision);

   
}

console.log(circleArea2(circle));