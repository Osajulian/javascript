## Arithmetic Operators
We have a new operator in JavaScript - expansion (**)
x ** y  - means x raised to the power of y;

```
let x = 2;
let y = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
increment
decrement

// Increment
console.log(++x) 
// 1st x is increased then added to the current value of x. x = 3.

console.log(x++) 
// x is displayed and then increased. x = 2 with 1st console.log although the value of x is increased to 3, using // a 2nd console.log will confirm that x now has a value of 3.


// Decrement
// console.log(--y) // 1st y is decreased then eubtracted from the current value of y. x = 3.


```

## Assignment Operators

```
let x = 10;
x += 5;
x = x + 5; // both are the same

// all the other aritmetic operators have this combination with the assignment operator.
```

## Comparison Operators

```
let x = 1;
console.log(x > 0); // returns true
// The reslt of an expression that includes a comparison operator is a boolean.

// Relational Operators
console.log(x < 1);
console.log(x <= 1);
console.log(x > 1);
console.log(x >= 1);

// Equality Operators

// strict equality (type & value)
console.log(x === 1);
console.log(x !== 1);

// loose equality (value)
console.log(x == 1); // it resolves to true because it converts the value of the right operand's type to the left
console.log(x != 1);
```

## Logical Operators with Boolean values
Logical AND (&&) - Returns TRUe if both operands are true.
Logical OR (||) - Returns TRUe if one of the operands are true.
NOT (!)

## Logical Operators with Non Boolean values (Truthy and Falsy)

falsy:
false = boolean
0
null
undefined
''
NaN

// truthy (any value that is not 'falsy')
true
'efe'
1
'false'
