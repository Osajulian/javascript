/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

const numbers = [2, 3, 6, 6, 5]

function getSecondLargest(nums) {
    const maxNum = Math.max(...nums);
    let newNums = []
   

    for (let num of nums) {
        if (num !== maxNum)
        newNums.push(num)
        
    }

    return newNums.reduce((a, b) => a > b ? a : b);
 
    }


console.log(getSecondLargest(numbers))

