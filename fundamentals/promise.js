// creating a promise
// you won't have to do this most of the time as many 3rd party libraries 
// create a promoiise that we have to execute the 'then' function on per 
// 'settling a promise'

// more on MDN
let resolvedPromise = new Promise(
    function(resolve, reject) {
        setInterval(resolve, 100, 'some value');
    }
);
console.log(resolvedPromise);

let rejectedPromise = new Promise(
    function(resolve, reject) {
        setInterval(reject, 400, 'some value');
    }
);
console.log(rejectedPromise);


// settling a promise

rejectedPromise.then(
    value => console.log('fullfilled: ' + value),
    error => console.log('rejected: ' + error)
)

resolvedPromise.then(
    value => console.log('fullfilled: ' + value),
    error => console.log('rejected: ' + error)
)