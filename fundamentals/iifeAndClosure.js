// IIFE

(function() {
    console.log('Immediately Invoked');
})()

let app = (function () {
        console.log('Function Expression Immediately Invoked');
    })();

// IIFE used with Closure

let app2 = (function() {
    let carId = 123;
    getId = function() {
        return carId
    };
    return {
        getId: getId
    };
})();

console.log('IIFE-CLOSURE: ', app2.getId());

(function () {
    console.log('Hello IIFE!')
})();

(function() {
    console.log('Hello alt IIFE!')
}());

//this will produce an error thereby proving that an IIFE stops the pollusion
//of the global scope by variables as employeeName is confined to the function scope and  not 
//recognized when called from the global scope
(function() {
    let employeeName = 'Jill';
})();
console.log(employeeName);