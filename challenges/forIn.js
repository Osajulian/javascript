const person = {
    name: 'Osa',
    gender: 'male'
};

for (let key in person) {
    console.log(key); //access the object's keys
    console.log(person[key]) //access the object's value
}

const colors = ['red', 'green', 'blue' ];
for (let index in colors)
console.log(index, colors[index]);
// fo-in loop no longer ideal to iterate over an array. ES6 gives us an alternative approach via fo-of loop