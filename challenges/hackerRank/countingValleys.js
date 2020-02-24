// Complete the countingValleys function below.
function countingValleys(n, s) {
    const pattern = /UU/g;
    let count = 0
    let result = s.match(pattern)
    
    return result.length;
}

console.log(countingValleys(12, 'DDUUDDUDUUUD'));

