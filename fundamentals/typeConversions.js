// convert to string
let foo = 77;
let bar = foo.toString();
console.log(typeof foo); // this remains a number
console.log('bar: ', typeof bar); // string

// convert string to integer
Number.parseInt('77') // 77

let strNumber = '77';
Number.parseInt(strNumber) 
console.log(strNumber); // 77

let strNumber88 = '88';
console.log(typeof +strNumber88) // adding + is another form of string to number conversion

// conver string to number (float)
console.log(Number.parseFloat('77.77')) // 77.77