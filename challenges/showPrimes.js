/*
call the function with a number (limit) and it returns all the prime numbers from 0 - limit
Prime numbers are number whose factors are only 1 and itsel e.g. 11, 13, 17. etc.

*/


showPrimes = limit => {
  for (let number = 2; number < limit; number++) {
    let isPrime = true;

    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
};

showPrimes(20);

// Using SRP Single Responsibility Principle

showPrimesSRP = limit => {
    for (let number = 2; number < limit; number++)
    if (isPrime(number)) console.log(number);
}

isPrime = number => {
    for (let factor = 2; factor < number; factor++) 
    if (number % factor === 0)
    return false;

    return true;
}

showPrimesSRP(20);