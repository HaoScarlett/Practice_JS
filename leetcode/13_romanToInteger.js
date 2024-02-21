// 13. Roman To Integer

// Hints: back to forward; map(callbackFn)

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0;
  // 🟡 How to represent value by symbols? -- Mapping
  const romanToInt_map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Left to right: if s[i]< s[i+1], num[i] = s[i+1] - s[i], move the pointer
  for (let i = 0; i < s.length; i++) {
    const currentPosition = romanToInt_map[s[i]];
    const nextPosition = romanToInt_map[s[i + 1]];
    // Check substraction condition
    if (currentPosition < nextPosition) {
      total += nextPosition - currentPosition;
      i++;
    }
    total += currentPosition;
  }
  return total;
};
