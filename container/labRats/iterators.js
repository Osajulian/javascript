let arr = [1, 2, 3]

let arrGen = arr[Symbol.iterator]();

console.log(arrGen.next());