/*
In this challenge, we practice looping over the characters of string. 
Check out the attached tutorial for more details.

Task
Complete the vowelsAndConsonants function in the editor below.
It has one parameter, a string, , consisting of lowercase English alphabetic 
letters (i.e., a through z). The function must do the following:

First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, 
and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order 
as it appeared in .
*/




function loops(str) {
    let vowels = 'aeiou'
    let vowelsArray = [];
    let consArray = [];
    let output = [];
    for (s of str)
    if (vowels.includes(s))
    vowelsArray.push(s)
    else {
        consArray.push(s);
    }
    output = vowelsArray.concat(consArray)
    let i = 0;
    while(i <= output.length)  {
        console.log(output[i]);
        i++;
    }
  
}

console.log(loops('javascriptloops'));