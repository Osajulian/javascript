//write a function that returns the sum of all the multiples of 3 and 5, from zero up to the limit passed in as the parameter

function sum(limit) {
    let sum = 0;

    for(i=0; i<=limit; i++)
    if((i % 5 === 0) || (i % 3 === 0))
    sum += i;
    
return sum;
   
}
console.log(sum(10));