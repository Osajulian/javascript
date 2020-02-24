// if ( 5 === 5) {
//     let message = 'Inside if block';
// }

// console.log(message); // error message declared in block scope

let message = 'in global scope';



if (5 === 5) {
    let message = 'inside if block';
    console.log(message);
}

console.log(message);

// var
// block scopes created with for loops leak their var variables.
// block scopes created with functions don't leak their var variables.