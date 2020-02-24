//write a function that takes in an array of values and then counts the truthy values in the array

function countTruthy(array){
    let count = 0;
    for(let value of array)
    if(value)
    count++;
    console.log(count);
   
}

console.log(countTruthy([1,2,3,3,5, undefined, 0]));