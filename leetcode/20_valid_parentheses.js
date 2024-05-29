// 20_valid_parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // last in, first out
  const length = s.length;
  if (length === 1 || length % 2 !== 0) {
    return false;
  }

  const input = Array(length).fill("");

  let i = 0; // pointer
  while (i < length) {
    if (i % 2 !== 0) {
      if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
        return false;
      }
    }
    input[i] = s[i];
    if (input[i] === input[i - 1]) {
      return false;
    }
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
