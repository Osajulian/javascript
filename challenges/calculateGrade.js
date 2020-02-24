// an array of grades (number) is passed to the function, which then
// finds the average and returns a grade based on the following
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const scores = [93, 90, 93]

calculateGrade = marks => {
    const average = calculateAverage(marks);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B'
    return 'A';
}

calculateAverage = array => {

    let sum = 0
    
    for (let value of array)
    sum += value;
   return Math.round(sum / array.length);
   
}

console.log(calculateGrade(scores));

