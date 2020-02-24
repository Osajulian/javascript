// map method returns a new array

const numbers = [-1, 2, 3, -3];

const items = numbers.map(item => '<li>' + item + '</li>');

console.log(items); // [ '<li>-1</li>', '<li>2</li>', '<li>3</li>', '<li>-3</li>' ]

// you can use the join() method to return a string if you want to add to html

const html = items.join('');
console.log(html); // <li>-1</li><li>2</li><li>3</li><li>-3</li>

// adding ul

const html2 = '<ul>' + items.join('') + '</ul>';
console.log(html2); // <ul><li>-1</li><li>2</li><li>3</li><li>-3</li></ul>

// map to an object
const mapObj = numbers.map(n => {
    return {value: n};
    // const obj = {value: n}
    // return obj Original implementation - Better option used above
});
console.log('mapObj ', mapObj); // mapObj  [ { value: -1 }, { value: 2 }, { value: 3 }, { value: -3 } ]

// edge case for above implementation
// since we are just returning a value, we could use the 'single-line' arrow function implementation, yes?
const mapObj1 = numbers.map(n => {value: n});
console.log(mapObj1) // [ undefined, undefined, undefined, undefined ]
// the above returned an array of 'undefined' values and the reason for this is that by default,
// the curly braces in an arrow dunction represents a code block so when the JavaScript engine tries
// to parse the arrow function, it thinks we are defining a code block as opposed to returning an object.
// So if you are returning an object in a 'single-line' arrow function, you put the object in parenthesis.
const mapObj2 = numbers.map(n => ({value: n}));
console.log(mapObj2); // [ { value: -1 }, { value: 2 }, { value: 3 }, { value: -3 } ]



