// Converts roman numerals to base 10 numbers
// input: String -- any valid roman numeral
// output: Int -- converted number
// Limits: MAX_INTEGER
function convert() {
  const romanValue = process.argv[2];

  const NUMBER_MAP = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let romanArr = [];

  //input checking
  if (typeof romanValue !== "string") {
    console.log("Input not a string");
    return undefined;
  }

  // makse sure every character in this string is a roman numeral
  for (let i = 0; i < romanValue.length; i++) {
    const letter = romanValue[i];
    if (Object.keys(NUMBER_MAP).includes(letter) === false) {
      console.log("Input contains non roman numberal characters");
      return undefined;
    }
  }

  romanArr = romanValue.split("");

  // Iterate through each char in the array
  romanArr.forEach((currLetter, index) => {
    const firstNum = NUMBER_MAP[currLetter];

    //If there is another char in the list then we have to
    //check it according to roman numeral rules
    if (index + 1 <= romanArr.length - 1) {
      const secondNum = NUMBER_MAP[romanArr[index + 1]];

      if (firstNum >= secondNum) {
        total += firstNum;
      } else {
        total -= firstNum;
      }
    } else {
      total += firstNum;
    }
  });

  return total;
}
module.exports = convert;

console.log(convert());
