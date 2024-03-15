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
  for (let i = 0; i < s.length; i++) {
    for (const charT of t) {
      if (!charMap.has(s[i])) {
        if (!Object.values(charMap).includes(charT)) {
          charMap.set(s[i], charT);
          i++;
        } else {
          isIsomorphic = false;
        }
      } else {
        // key existed, check the value
        if (charMap.get(s[i]) !== charT) {
          isIsomorphic = false;
        } else {
          // if the value matched, move to the next char
          i++;
        }
      }
    }
  }
  return isIsomorphic;
};
