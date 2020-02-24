localStorage.setItem('location', 'Ney York'); // creates or updates location
console.log(localStorage.getItem('location')); // gets location value
localStorage.removeItem('location') // removes location
localStorage.clear(); // clears the entire local storage

// since local storage stores only strings of key-value, this is how you
// store objects in local storage using a combination of JSON.stringify() and JSON.parse()
const user = {
    name: 'Julian',
    age: 49
}

// stringify and save the data to local storage
const userJSON = JSON.stringify(user);
console.log(userJSON)
localStorage.setItem('user', userJSON);

// parse and read the data out of local storage
const userJASONGet = localStorage.getItem('user');
const userParse = JSON.parse(userJASONGet);
console.log(`The ${userParse.name} is ${userParse.age}`)
// this can only be viewed in the browser - duh!
