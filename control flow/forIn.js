// object
let person = {
    name: 'osa',
    age: 49
}

// for-in
for(let key in person) {

    console.log(key);  // will print the keys
    console.log(person[key]); // will print the values
}

// array
let usaColors = ['red', 'white', 'blue']

for(let index in usaColors) {
    console.log(index);
    console.log(usaColors[index]);
}

// Starting from ES6, there's a better way to iterate over arrays
// for-of

for (let colorsOfUSA of usaColors)
console.log(colorsOfUSA);

// so in concluding, use
// for-in loop to iterate over the properties of an object
// for-of loop to iterate over the elements of an array