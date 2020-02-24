//2 parameters 1 an array and the other a number. Create a function that adds two of the array number 
//and if it equals the other parameter, returns true otherwise return false

function arrayAdd(arr, num) {
for(let i = 0; (i<arr.length-1); i++){
for(let j = 1; j<arr.length; j++)
   
if(arr[i] + arr[j] === num)
return 'true'
}
return 'false';

}

console.log(arrayAdd([1, 2, 3, 4, 10], 11));