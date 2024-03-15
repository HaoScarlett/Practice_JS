// 205_isomorphic_string

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // Build up a new map to track the char pairs
  const charNote = new Map();

  // Compare the char in two string simultaneously
  // char in s is the key, char in t is the value
  for (let i = 0; i < s.length; i++) {
    // if it's a new key
    if (!charNote.has(s[i])) {
      charNote.set(s[i], t[i]);
    } else {
      // it the key exist, check if value matches
      if (charNote.get(s[i]) !== t[i]) {
        return false;
      }
    }
    for (const [key, value] of charNote) {
      if (value === t[i] && key !== s[i]) {
        return false; // t[i] is already mapped to a different character in s
      }
    }
  }
  return true;
};
