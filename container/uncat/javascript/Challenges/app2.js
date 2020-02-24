// 'use strict'

// let car = {
//     id: 123,
//     getId: function() {
//         return this.id
//     }
// }

function carId() {
    this.id = '007';
    return this.id
}

let newCar = {id: 456}



let newCarFn = carId.bind(newCar.id);

console.log(newCarFn())

// console.log(car.getId())