// write a function that takes 2 arguments, a defined array and an inline array
// return a new array without the elements included in the inline array
// Note: remove the element in the excluded array list irrespective of the number 
// of times it appears

let numbers = [1, 2, 3, 4, 1, 1];

excerpt = (array, excluded) => {
    let output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}

console.log(excerpt(numbers, [1]));