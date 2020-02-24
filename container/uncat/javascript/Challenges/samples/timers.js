//setTimeout
console.log(new Date().getSeconds());
setTimeout(() => {
    console.log(new Date().getSeconds());
}, 1000)

console.log(new Date().getSeconds());
let id = setTimeout(() => {
    console.log(new Date().getSeconds());
}, 1000);
clearTimeout(id)


//clearTimeout



//setInterval - you must add clearInterval or else the callback function runs continously
console.log(new Date().getSeconds());
var id = setInterval(() => {
    var secs = new Date().getSeconds();
    console.log(secs);
    if (secs === 10)
        clearInterval(id)
}, 1000)
