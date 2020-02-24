// create a function that takes 2 arguments, an array and a 
// searchElement. The function should return the count of the
// searchEelement in the array.

let numbers = [1, 2, 3, 4, 1, 1, 1, 1, 1, 1];

countOccurances = (array, searchElement) => {
    let count = 0
    for (let element of array)
        if( element === searchElement)
            count ++;
            return count;
}

let output = countOccurances(numbers, 7);

console.log(output)

// reducer style
countOccurances2 = (array, searchElement) => {
    return array.reduce((accumulator, current) => {
        const occurance = (current === searchElement) ? 1 : 0
        // console.log(accumulator, current, searchElement)
        return accumulator + occurance;
    }, 0)
}

let output2 = countOccurances2(numbers, 9);

console.log(output2)