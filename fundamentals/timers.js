// setTimeout() is a global function

let timeOut = setTimeout( function() {
    console.log('1 second passed');
}, 1000);


// if need to cancel...
clearTimeout(timeOut);

// setInterval

let timeInterval = setInterval(function() {
    console.log('1 second has passed');
}, 1000)

clearInterval(timeInterval);