// 20_valid_parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

  // create brackets pairs
  const bracketsPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      // if the char is an opening bracket, push it onto the stack
      stack.push(char);
    }
    // if the char is a closing bracket
    else if (char === ")" || char === "}" || char === "]") {
      // check if the stack if empty or 
      // the top of the stack doesn't match the bracket pair
      if (stack.length === 0 || stack.pop() !== bracketsPairs[char]) {
        return false;
      }
    }
  }
  // if the stack is empty, all brackets were matched correctly
  // or there are unmatched opening brackets remaining
  return stack.length === 0;
};
