/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
// Write a function that takes a parameter and when you pass a number and call the function, it returns
// from zero to the argument passed to the function with a label specifying if that number is "ODD" or "EVEN"

// Osa implemetation
function showNumbers(limit) {
  // eslint-disable-next-line no-plusplus
  for (i = limit; i >= 0; i--) {
    if (i % 2 === 0) {
      console.log(`${i} EVEN`);
    } else console.log(`${i} ODD`);
  }
}
console.log(showNumbers(4));

// Mosh's implementation

function showNumbers2(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(1, message);
  }
}
