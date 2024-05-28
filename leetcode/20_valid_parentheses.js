// 20_valid_parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // last in, first out
  const length = s.length;
  const input = Array(length).fill("");

  let i = 0; // pointer
  while (i < length) {
    input[i] = s[i];
    if (s[i] === ")" && input[i - 1] !== "(") {
      return false;
    } else if (s[i] === "]" && input[i - 1] !== "[") {
      return false;
    } else if (s[i] === ")" && input[i - 1] !== "(") {
      return false;
    }
    i++;
  }
  return true;
};
