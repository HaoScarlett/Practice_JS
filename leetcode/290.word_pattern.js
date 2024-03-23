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
  if (pattern.length !== sArray.length) {
    return false;
  }
  // Go through the s arr and each char in pattern,
  // built a key-value pair(unique) and store it in a map.
  //   To handle two dif keys have the same value, use set to track mapped values.
  const map = new Map();
  const mapped = new Set();
  for (let i = 0; i < sArray.length; i++) {
    if (!map.has(pattern[i])) {
      // check if sArray[i] is already mapped
      if (mapped.has(sArray[i])) {
        return false;
      }
      // Keep track of the key-value pair, if it's re-assign to dif value, return false.
      map.set(pattern[i], sArray[i]);
      //   note new value
      mapped.add(sArray[i]);
    } else {
      if (map.get(pattern[i]) !== sArray[i]) {
        return false;
      }
    }
  }
  return true;
};
