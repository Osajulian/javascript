/* eslint-disable no-shadow */
/* eslint-disable no-console */
const name = '  Andrew Mead ';

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
const password = 'abc123asdf098';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

// Challenge area

// isValidPassword
// eslint-disable-next-line func-names
// eslint-disable-next-line no-shadow
// eslint-disable-next-line func-names
const isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password'); // in this scenerio always use this 1-liner instead of an if else
};

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('asdfpasdfpoijpassword'));
