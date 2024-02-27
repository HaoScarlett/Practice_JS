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
    if (num > keyValue) {
      romanNum.push(key);
      // substract the largest symbol value, and look for the largest symbole fits into the remainder
      num = num - keyValue;
      // case: 3
      if(num===2){
        romanNum.push("II");
      }
    }
  }
  // Concatenate romanNum array elements in a string
  return romanNum.join('');
};
