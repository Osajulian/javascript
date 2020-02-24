'use strict'

//object via literal/JSON
let task = {};
task.title = 'my task';
task.description = 'my description';
console.log('DESCRIPTION: ' + task.description);

//object via prototype
let newTask = Object.create(Object.prototype)
newTask.title = 'my new task title';
newTask.description = 'my new task description';
console.log('TITLE: ' + newTask.title);

//Object via new
let newestTask = new Object();
newestTask.title = 'my newest task title';
newestTask.description = 'my newest task description';
console.log('NEW TTITLE: ' + newestTask.title);

//with function 
//JSON
let funcTask = {
    name: '',
    addName: function(name) {
        name;
        return name;
    }
}
console.log('NAME: ' + funcTask.addName('Rakheem'));

//with new
var project = new Object();
project.name = 'Project Phoenix';
project.securityLevel = 15;
project.updateDueDate = function () {
    return true;
};
console.log(project.updateDueDate());

//To prototype a  new object against existing one, use Object.create
let secretProject = Object.create(project);
console.log(`child object: ${secretProject.name}`);
console.log(typeof secretProject.toString);

console.log(secretProject.__proto__ === Object.prototype)
//the above returns false because Object.create is the prototype of it's parent - project

console.log(project.__proto__ === Object.prototype);
//the above returns true because it was created with JSON and 
//objects created via this way get their prototype set to Object.prototype

console.log(secretProject.__proto__.__proto__ === Object.prototype);
//now this will show as 'true' as we are traversing the prototypical inheritance chain.

//The key advantage to using bracket notation over dot notation is that you can use
//bracket notation using variables

let obj = {};
obj['param'] = 'new value'
console.log(obj['param']);

//The key advantage to using bracket notation is that you can use bracket notation using varaiables
let gameOfThrones = {};
let genre = 'Drama';
gameOfThrones['genre'] = genre;
console.log('GENRE ' + gameOfThrones['genre']);


gameOfThrones['season'] = 5;
console.log(gameOfThrones.season);
gameOfThrones.season = 7
console.log(gameOfThrones['season']);

//object.define property
Object.defineProperty(gameOfThrones, 'characters', {
    value: 'Lanister',
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(gameOfThrones.characters);
gameOfThrones.characters = 'Sensei';

console.log(gameOfThrones.characters);

for(let fields in gameOfThrones)
console.log(`FIELDS ${fields}`);

// Iterating an object

// for-in

const movies = {
    name: 'Halloween',
    year: 1977
}

// getting the properties
for (let key in movies) {

    console.log(key)
    
    // getting the values
    console.log(movies[key]);

}

// for-of can only be used with arrays and map
// An object is not iterable like an array thus we cannot use a for-of loop,
// however, we have this method called Object.keys

const person = {
    name: 'Julian',
    Dob: 1970
}
for (let values of Object.keys(person))
console.log(values)
// Object.keys returns an string array of all the properties and methods of the object  thus for-of can loop it

// another method similar is Object.entries - which returns an array of the object's key-value pair

for(let value of Object.entries(person))
console.log(value)

// to see if a given method or property exists in a given object, we use the 'in' operator
if ( 'name' in person) console.log('yes');

// cloning an object
// 1- old way
const newPerson = {};

for (let key in person)
newPerson[key] = person[key]

for (let key in newPerson)
console.log('newPerson keys: ', key)

for (let key of Object.entries(newPerson))
console.log(key)

// 2- Object.assign

const anotherPerson = Object.assign({}, person);
console.log('anotherPerson: ', anotherPerson);

// note: the first argument passed to Object.assign, does not necessarily have to be an empty object
// it could be an existing object, it can have one or more properties or methods.

// with property color added
const thirdPerson = Object.assign({
    color: 'black'
}, person);
console.log('thirdPerson: ', thirdPerson);

// 3 - Spread operator

const fourthPerson = {...thirdPerson}
console.log('fourthPerson: ', fourthPerson);