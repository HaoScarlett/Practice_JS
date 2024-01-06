// 392. Is Subsequence

// Create an indexed dictionary for each element in t
// Keys are characters, values are indices
// Iterate through s to look up its position in t

var isSubsequence = function (s, t) {
  if (s.length === 0) {
    return true; // An empty string is always a subsequence
  }

  // Create an object to store characters and their indices in t
  function createIndex(str) {
    // Initiate the indexT object
    const index = {};

    // Iterate through t to store every element and its indice
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!index[char]) {
        index[char] = [];
      }
      index[char].push(i); // Store the position of an element
    }
    return index;
  }

  const tIndex = createIndex(t);
  let prevIndex = -1; // To track indices of characters in t

  //   Look up the character in s and find its position in t
  for (let j = 0; j < s.length; j++) {
    const char = s[j];
    if (!tIndex[char]) {
      return false; // If an element in s in not found in t
    }
    // Find the first index of the character in t that is greater than the previous one
    let found = false;
    for (const index of tIndex[char]) {
      if (index > prevIndex) {
        prevIndex = index;
        found = true;
        break;
      }
    }
    if (!found) {
      return false; // If no index in t is greater than the previous one
    }
  }
  return true;
};
