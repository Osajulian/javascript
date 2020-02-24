/*
Objective

In this challenge, we practice declaring variables using the let and const keywords. 
Check out the attached tutorial for more details.

Task
Declare a constant variable, , and assign it the value Math.PI. 
You will not pass this challenge unless the variable is declared as a 
constant and named PI (uppercase).
Read a number, , denoting the radius of a circle from stdin.
Use  and  to calculate the  and  of a circle having radius .
Print  as the first line of output and print  as the second line of output.
Input Format

A single integer, , denoting the radius of a circle.

Constraints

 is a floating-point number scaled to at most  decimal places.
Output Format

Print the following two lines:

On the first line, print the  of the circle having radius .
On the second line, print the  of the circle having radius .
Sample Input 0
*/

const PI = Math.PI;
let r = 2.6;
let area = PI * (r ** 2);
let perimeter = PI * 2 * r;
console.log('area: ', area);
console.log('perimeter: ', perimeter);