function getLetter(s) {

  let firstChar = s[0];
  let letter = "";

  switch (firstChar) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;
    case "h":
    case "j":
    case "k":
    case "fl":
    case "m":
      letter = "C";
      break;
    default:
      return "D";
  }

  return letter;
}

console.log(getLetter("zsaaaas"));


