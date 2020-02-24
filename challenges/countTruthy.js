// Falsy values
// undefined
// null
// ''
// false
// 0
// NaN

const array = [0, 1, 3, 100, true, true, false, '']

function countTruthy(array) {
let count = 0;

for (let value of array) 
if (value)
count++;
return count;

}



console.log(countTruthy(array));