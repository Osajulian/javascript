/*
Task
Implement a function named factorial that has one parameter:
an integer, . It must return the value of  (i.e.,  factorial).

Sample Input
4
Sample Output
24

*/

function factorial(number) {
    let mult = 1;
    for (let i = 1; i <= number; i++) {
        mult *= i;
        
       
    }
    return mult;
}

console.log(factorial(4));