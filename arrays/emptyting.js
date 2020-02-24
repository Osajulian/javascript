let numbers = [1, 2, 3, 4, 5];
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = numbers1;
let numbers3 = [1, 2, 3, 4, 5];
let numbers4 = numbers3;
let numbers5 = [1, 2, 3, 4, 5];
let numbers6 = [1, 2, 3, 4, 5];

// solution 1 - Recommended for single scenerio
numbers = [];
console.log('numbers: ', numbers); // []

// note: this solution works if you do not have any other references to the original array. 
// Remember, the reassigning of 'numbers' to another reference is that, another reference. 
// If the array has no other variable pointing to it as a reference, it would be garbage collected, 
// otherwise, it'll remain. See example below

numbers1 = [];
console.log('numbers1: ', numbers1); // []
console.log('numbers2: ', numbers2); // [1, 2, 3, 4, 5]

// In this scenerio, you should use any of the following

// solution 2 - Recommended for multiple scenerio
numbers3.length = 0;
console.log('numbers3: ', numbers3); // []
console.log('numbers4: ', numbers4); // []

// solution 3 - ugly / noisy
numbers5.splice(0, numbers5.length)
console.log('numbers5: ', numbers5); // []

// solution 4 - ugly / noisy
while(numbers6.length > 0)
numbers6.pop();
console.log('numbers6: ', numbers6); // []

