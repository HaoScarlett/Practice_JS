// 12. Integer To Roman

/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
  const romanNum = [];

  // Handle edge case: num = 0, no representation
  if (num === 0) {
    return romanNum;
  }
  // Create a mapping between integers and their corresponding Roman numeral symbols.
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

  // Iterate over the keys of the map in descending order
  //   Object.keys(obj) – returns an array of keys.
  const keys = Object.keys(romanToInt_map).sort(
    (a, b) => romanToInt_map[b] - romanToInt_map[a]
  );
  for (const key of keys) {
    // for (const i in romanToInt_map)-- the number of times to add a
    // specific symbol is not predetermined.
    // We don't know how many times a paricular symbol needs to be added
    // to represent the entire value of 'num'

    // a particular Roman numeral symbol may appear more than once
    // While loop: keep adding the same symbol repeatedly until the condition turns falsy
    while (romanToInt_map[key] <= num) {
      romanNum.push(key);
      num -= romanToInt_map[key];
    }
    // }
  }
  return romanNum.join("");
};
