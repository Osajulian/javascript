//write a function that shows stars * based on the number passed. If 10 is passed into the function, rows of ascending stars are shown from 1 to 10.

function showStars(rows) {
    for(i=1; i<=rows; i++)
    console.log('*', i);

}

function stars(input) {
   switch (input) {
case 1:
return '*';

case 2:
return '**';
   }
}

showStars(10);

console.log(stars(2));