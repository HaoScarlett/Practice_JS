// 20_valid_parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // last in, first out

  // create brackets pairs
  const bracketsPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const input = [];

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      // if it's an opening bracket, push it to the array
      input.push(char);
    }
    if (char === ")" || char === "}" || char === "]") {
      // if it's an closing bracket, check if it matches last value in the stack
      // no match: return false
      if (input.length === 0 || input.pop() !== bracketsPairs[char]) {
        return false;
      }
    }
  }
  if (input.length !== 0) {
    return false;
  }
  return true;
  // return input.length === 0;
};
