// write a function that acts like the array includes method
let numbers = [1, 7, 9];

includes = (array, searchElement) => {
  for (let element of array) 
    if (element === searchElement) 
        return true;
    return false;
};

let result = includes(numbers, 9);

console.log(result);
