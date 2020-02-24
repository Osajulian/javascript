expression / statement
expression is something that produces a vlue -
x + y;
X < y;

statement:
let name = 'osa';
console.log(square((2));

In ES6 symbol was added as a primitive type

JavaScript is a dynamic language and unlike static type languages, it's variable types are determined at runtime based on the values that we assign to them.

undefined is a primitive type.
undefined is the default value of variables in JavaScript.

Primitive value types = string, number, boolean, undefined, null(typeof null = 'object'), symbol
Reference type = array(typeof array = 'object'), object, function

argument / parameter
parameter = is the function input at the time of function declaration - 'name' in the greet function
argument = the value supllied to the parameter at runtime - 'osa' in the greet function call.
```
function greet(name) { // name = parameter
    console.log('Hellp ' + name);
}

greet('Osa');  // 'osa' = argument
```