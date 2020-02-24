
// Given an array of unsorted positive integers
// write a function # that finds runs of 3 consecutive numbers (ascending or descending) 
//and returns the indices where such runs begin. If no such runs are found. return null
//1 2 3 5 10 9 8  10 11 7 

// let arrConNums = [];

// let consNums = (array) => {
// const finalElement;
//     for (let i = 0; i < array.length-1; i++) {
//         const element = array[i];
//         const nextElement = array[i + 1];

//         const remValue = Math.abs(element - nextElement);

//         if (remValue === 1) {
//             let 
          
//         }

//         console.log(element, nextElement)
        
//     }
// }

// consNums([1, 2, 3])

// let consecNums = array => {
//     let arrayIndices = [];
//     for (let i = 0; i < array.length -1; i++) {
//         const element = array[i];
//         for (let j = 1; j < array.length; j++) {
//             const nextElement = array[j];
//             console.log(`nextElement: ${nextElement} element: ${element}`)
//             const remValue = Math.abs(element - nextElement);
//             if (remValue === 1) {
//                 arrayIndices.push(i)
//             }
//             console.log('return false');
//         }
//     console.log(arrayIndices.toString())
     
        
//     }
// }

// consecNums([4,2,3])

let consecNums = (element1, element2, element3) => {
    if (Math.abs(element1 - element2 && element2 - element3) === 1) {
        return 'YES';
    } 
    return 'No'
    }
    
    console.log(consecNums(13, 17, 15));

    //possible array methods to use: reduce, sort, indexOf

//try reduce method