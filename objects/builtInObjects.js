
// String object methods
// JavaScript is able to have string methods because it has a String constructor

// string literal / string primitive
const message = 'This is my first string message';

// string object (behind the scenes, it uses the constructor method to initialize)
const anoother = new String('This is my second string message');


// Some JavaSCript string methods / properties
// length
console.log('length: ', message.length)

// find character via index (subscript)
console.log('2nd character: ', message[1]);

// includes
console.log('includes \'my\': ', message.includes('my'));

// startsWith and endsWith (both are case sensitive
console.log('startwith: ', message.startsWith('T'));
console.log('endsWith: ', message.endsWith('e'));

// indexOf
console.log('indexOf: ', message.indexOf('m'));

// replace
console.log('replace: ', message.replace('first', 'numero uno'));

// toUpper
let toUpper = message.toUpperCase();
// note: the reason you are able to access object methods from this literal string variable as in 
// .toUpperCase() methods, is that the JavaScript engine wraps the string literal with a string object
console.log(toUpper);


// Date object

const now = new Date(); // creates the today's date
const date1 = new Date('December 7 1970 00:00'); // Google JavaScript dates' for more available formats
const date2 = new Date(1970, 11, 7, 0, 0); // month is zero based. 0 = January, 11 = December. If you omit, the last 2 arguments, date2 is initialized to 0

// the date methods all have get and set methods
// Some get methods
console.log('getDate: ', now.getDate()); // 18
console.log('getDay: ', now.getDay()); // 4
console.log('getFullYear: ', now.getFullYear()); // 2019
console.log('getHours: ', now.getHours()); // 13
console.log('getMonth: ', now.getMonth()); // 6
console.log('getTime: ', now.getTime()); //  1563469937726
console.log('getMinutes: ', now.getMinutes()); //  1563469937726

// some set methods
console.log('setFullYear: ', now.setFullYear(1969)); // 
console.log('setMonth: ', now.setMonth(0)); // 
console.log('setDate: ', now.setDate(19)); // 



// date/time display methods
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
