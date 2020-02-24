function repeatedString(s, n) {
  let aLowerCase = s.toLowerCase();
  let count = 0;
  if (!aLowerCase.includes("a")) {
    return count;
  } else if (aLowerCase === "a") {
    return n;
  } else {
    for (let char of aLowerCase)
      if (char.includes("a")) {
        count++;
      }
      let exactCount = Math.trunc(n / aLowerCase.length);
      let modStr = n % aLowerCase.length;
    let countMultiply = exactCount * count;
    for (let i=0; i<modStr; i++) {
        if (aLowerCase[i] === 'a')
        countMultiply ++;
    }
    return countMultiply;
  }
}

// console.log(repeatedString('ABCDEFghiJKLmnopQRSTUvwxyZ', 1000000000000))
console.log(repeatedString('aab', 882787))
