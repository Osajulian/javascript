// create a function that takes 3 arguments - the array, the index of the element,
// and offset, the new index the element should be moved to
// constraints - elements can not be out of bounds per the array length - should
// throw an error either way - positive and negative values can be used for the offset

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 3)

console.log(output);

function move(array, index, offset) {
    // const position = index + offset;
    if (offset >= array.length || offset < 0) {
        console.error('Invalid offset');
        return;
    }

const output = [...array];
const element = output.splice(index, 1)[0];
output.splice(offset, 0, element);
return output;
}  
