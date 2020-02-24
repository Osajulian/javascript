// dynamic property
const mystery = 'p3';

const obj = {
    p1: 20,
    p2: 70,
    f1 () {}, 
    f2: () => {},
    [mystery]: 7
}

// Question: whay is the value of obj.mystery at runtime?
// Answer: it's 'undefined' because the mystery property was defined
// with 'dynamic property syntax', which ,eans JavaScript will evaluate
// the 'mystery' expression first and whatever that expression evaluates
// to will become the object property. In this case, the object will 
// have the property p3 with a value of 7



console.log(obj.mystery) // undefined
console.log(obj.p3) // 7

// property - value with the same name

const PI = Math.PI;

const obj2 = {
    p1: 20,
    p2: 70,
    f1 () {}, 
    f2: () => {},
    [mystery]: 7,
    PI
}

