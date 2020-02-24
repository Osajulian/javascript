// return the sum of multiples of 3 and 5 using the passed in argument as the limit

sumMultiple = limit => {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)){
            sum += i
        }
    }
    
    return sum;
}

console.log(sumMultiple(10));