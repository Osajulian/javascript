let fahrenheit = 50; // 0c - 273.15k
let celsius = ((fahrenheit - 32) * 5) / 9;
let kelvin = ((fahrenheit + 459.67) * 5) / 9;

let getTemp = function tempConvert(faht) {
  return {
    fahrenheit: faht,
    celsius: ((fahrenheit - 32) * 5) / 9,
    kelvin: ((fahrenheit + 459.67) * 5) / 9
  };
};

// console.log(celsius)
// console.log(kelvin)

let tempValues = getTemp(50);

console.log(`The value of ${tempValues.fahrenheit} in celsius is  ${tempValues.celsius},
and the value in kelvin is  ${tempValues.kelvin}`);
