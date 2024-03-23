// 290  word_pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // Transform s into an array
  // const s = "dog cat cat dog";
  // const sArr = s.split(' ');
  // ["dog", "cat", "cat", "dog"]
  const sArray = s.split(" ");
  // Handle the edge case
  if (pattern.length !== s.length) {
    return false;
  }
  // Go through the s arr and each char in pattern,
  // built a key-value pair(unique) and store it in a map.
  const map = new Map();
  // Keep track of the key-value pair, if it's re-assign to dif value, return false.
  for (let i = 0; i < sArray.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], sArray[i]);
    } else {
      if (map.s[i] !== sArray[i]) {
        return false;
      }
    }
  }
  return true;
};
