// window object

/* 

properties:

document
location
console
innerHeight
innerWidth
pageXOffset
pageYOffset

methods:

alert()
back()
confirm()

*/

// check for more on MSN

year = 1970; // attached to the window object (global object in node). Note: this will not 
//work if declared in amodule. All variables have to be explictly declared 

// console.log(window.year); // browser

console.log(global.year); // node
console.log(year); // this also works