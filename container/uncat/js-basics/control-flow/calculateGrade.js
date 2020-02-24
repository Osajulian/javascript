/* eslint-disable spaced-comment */
// write a function to calculate the grade of a student by average and assigns a grade based on the returned average
// 1-59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

console.log(calculateGrade([97, 87, 87]));

function calculateGrade(marks) {
    let averageGrade = calculateAverage(marks);

    if(averageGrade < 60) return 'F';
    if(averageGrade < 70) return 'D';
    if(averageGrade < 80) return 'C';
    if(averageGrade < 90) return 'B';
    return 'A';
  

    }

 
function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
    sum += value;
    return Math.floor(sum / array.length);
}
