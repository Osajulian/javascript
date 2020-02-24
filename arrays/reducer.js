let numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

for (let n of numbers)
sum += n;

console.log(sum);

// Arrays have a reduce method that can do the above in a cleaner fashion
// the reduce method reduces all the elements of the array (number, string, or objects) 
// into a single value
// The reducer function takes 2 arguments, the first is a callback function and the 
// 2nd is the inital value of the accumulator.

const accSum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log(accSum);

// we can make the code even shorter by excluding the initial value of the accumulator, in this case '0' abd
// thus the accumulator will be set to the array's first element.

// example without the accumulator's initial value and without the return keyword

const accSumAlt = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log('accSumAlt ', accSumAlt);

// other examples are in:
// getMax.js
// countOccurances.js