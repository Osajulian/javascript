// Write a function that takes two arguments (min and max)
// and returns an array of numbers that exist between min and max, 
// also should work for negative numbers

arrayFromRange = (min, max) => {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
};

console.log(arrayFromRange(-10, -1));
