// document.getElementById('elementId');

// document.getElementsByClassName('className');

// document.getElementsByTagName('tagName');

//  more on MDN

let el = document.getElementById('first');

console.log(el);

let els = document.getElementsByClassName('p1');

console.log(els); // gets all (2) paragraphs in the HTMLCollection array

console.log(els[0]); // gets first paragraph

let elsByTag = document.getElementsByTagName('p');

console.log(elsByTag);