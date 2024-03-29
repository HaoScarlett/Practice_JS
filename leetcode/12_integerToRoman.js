// 12. Integer To Roman

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanNum = [];
  const romanToInt_map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // Look for the largest symbol that fits into map
  for (const key in romanToInt_map) {
    const keyValue = romanToInt_map[key];
    if (num >= keyValue) {
      romanNum.push(key);
      // substract the largest symbol value, and look for the largest symbole fits into the remainder
      num = num - keyValue;
      // Case: 73;
      if (num % keyValue !== 0 && num > keyValue) {
        romanNum.push(key);
        num = num - keyValue;
      }
      // Check if remainder === 0
      if (num % keyValue === 0) {
        // if (num === keyValue) {
        //   romanNum.push(key);
        //   return romanNum.join("");
        // }
        if (num === 2) {
          romanNum.push("II");
          return romanNum.join("");
        }
        if (num === 1) {
          romanNum.push("I");
          return romanNum.join("");
        }
        const quotient = Math.floor(num / keyValue);
        const subRomanNum = key.repeat(quotient);
        romanNum.push(subRomanNum);
        return romanNum.join("");
      }
    }
  }
  // Concatenate romanNum array elements in a string
  return romanNum.join("");
};
