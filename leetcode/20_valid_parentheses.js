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
  let left = 0 // count the opening bracket
  while (i < length) {
    input[i] = s[i];
    if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
      left++;
    }
    i++;
  }
  

};
