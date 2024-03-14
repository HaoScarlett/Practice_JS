// 205_isomorphic_string

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // Set up a corresponding map of s, t
  // If a specific char doesn't in map, set its pair
  // if it's in the map, check the value

  let isIsomorphic = true;
  let charMap = new Map();

  // Iterate through s
  for (const char of s) {
    for (const charT of t) {
      if (!charMap.has(char)) {
        charMap.set(char, charT);
      } else {
        // key existed, check the value
        if (charMap.get(char) !== charT) {
          isIsomorphic = false;
        }
      }
    }
  }
  return isIsomorphic;
};
