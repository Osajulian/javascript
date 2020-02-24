// Arguments is a local variable that is bound to regular functions. 
// Note: Arguments only exists in regular functions, it is not bound
// or there is no local arguments variable in arrow functions.

function add() {
    return arguments
}
console.log(add(12, 7, 11, 23)) 
//[Arguments] { '0': 12, '1': 7, '2': 11, '3': 23 }

function sum() {
    return arguments[0] + arguments[1]
}
console.log(sum(12, 7, 11, 23)) 
// 19

const arrSum = () => arguments[0] + arguments[1]
console.log(arrSum(12, 7, 11, 23))
// error
