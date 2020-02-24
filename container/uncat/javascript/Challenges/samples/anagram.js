let anagramOne = [ 'J', 'y', 'm', 'z'];

let anagramTwo = ['j','o', 'n', 'j'];

/**write a function that returns 'true'
if the two anagrams are same and 'false'
if different.DO NOT SORT. SORTING ALGORITM
TAKES UP CODE PROCESSING TIME
*/

function isAnagram (anagramOne, anagramTwo) {
  let count = [];
  const hold = new Set()
  hold.add(42)
    let allElems = [];
    allElems = [...anagramOne, ...anagramTwo];

    return hold
    }





console.log(isAnagram(anagramOne, anagramTwo));