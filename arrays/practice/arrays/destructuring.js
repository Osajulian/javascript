let numbers = [1,2]
let [x, y] = numbers;
console.log('x=', x, '-', 'y=', y); // x=1 - y=2

// neat way of swapping using destructuring
[y, x] = numbers;
console.log('x=', x, '-', 'y=', y); // x=2 - y=1