// 20_valid_parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // last in, first out
  if (s.length === 1 || s.length % 2 !== 0) {
    return false;
  }

  // create brackets pairs
  const bracketsPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const input = Array(s.length).fill("");

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
