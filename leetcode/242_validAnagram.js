// 242_validAnagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // Handle the edge case
  if (s.length !== t.length) {
    return false;
  }

  // Use map to track each char's frequency in s
  const charFrequency = new Map();

  // Iterate through s to build key-value pair
  for (let i = 0; i < s.length; i++) {
    if (!charFrequency.has(s[i])) {
      charFrequency.set(s[i], 1);
    } else {
      // if key exists, fre + 1
      charFrequency.set(s[i], charFrequency.get(s[i]) + 1);
    }
  }
  //   Iterate trough t to compare with charFrequency
  for (let j = 0; j < t.length; j++) {
    // If no key in map matches char in t, return false
    if (!charFrequency.has(t[j])) {
      return false;
    } else {
      // Compare each char in t, if it matches one key in map, check the value.
      // If frequency = 0, return false.
      if (charFrequency.get(t[j]) === 0) {
        return false;
      } else {
        // If frequency > 0, set frequency = frequency -1.
        charFrequency.set(t[j], charFrequency.get(t[j]) - 1);
      }
    }
  }
  return true;
};
