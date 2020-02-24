// given an array return the max of the elements.
// first create a simple solution, then create using a reducer

// my solution
const numbers = [1, 2, 3, 4];
getMax = array => {
   array.sort();
   return array[array.length-1]

}

const output = getMax(numbers);
console.log('output: ', output);

// Mosh's solution
getMaxMosh = array => {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (let i=1; i<array.length; i++)
        if (array[i] > max)
        max = array[i];
     return max;   
}

const outputMosh = getMaxMosh(numbers);
console.log('outputMosh: ', outputMosh);

// using reducer
getMaxReducer = array => {  
   return array.reduce((a, b) => a > b ? a : b);
 }

const outputReduce = getMaxReducer(numbers);
console.log('outputReduce: ', outputReduce);