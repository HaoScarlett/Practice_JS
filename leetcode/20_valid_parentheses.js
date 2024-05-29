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

  // create brackets pairs
  const bracketsPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const input = Array(length).fill("");

  let i = 0; // pointer

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      // if it's an opening bracket, push it to the array
      input.push(char);
    }
    if(char === ")" || char === "}" || char === "]"){
      // if it's an closing bracket, check if it matches the previous one
      // match: pop the previous one
      // no match: return false
      
    }
  }
};
