function getLetter(s) {
    let letter = s[0];
    let A = 'aeiou';
    switch (letter){
       case A.includes(letter):
        return 'A';
       break;

       case 'l':
            if (letter.includes(s[0])) return 'B';
            break;
      
   }
}
console.log(getLetter('afrt'));

// let alpha = s => {
//     if('aeiou'.includes(s[0]))
//     return 'A';
//   return 'OUT'
// }

// console.log(alpha('zosa'));