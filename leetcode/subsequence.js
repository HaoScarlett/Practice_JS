// 392. Is Subsequence

// Create an indexed dictionary for each element in t
// Keys are characters, values are indices
// Iterate through s to look up its position in t

var isSubsequence = function (s, t) {
  // Create an object to store characters and their indices in t
  function createIndex(str) {
    // Initiate the indexT object
    const index = {};

    // Iterate through t to store every element and its indice
    for (let i = 0; i < str.length; ) {
      const char = str[i];
      if (!index[char]) {
        index[char] = [];
      }
      index[char].push(i); // Store the position of an element
    }
    return index;
  }

  const tIndex = createIndex(t);
  let tElementIndex = [];
  //   Look up the character in s and find its position in t
  for (let j = 0; j < s.length; j++) {
    if (s[j] in tIndex === false) {
      return false;
    }
    tElementIndex.push(tIndex[s[j]][0]);
  }

  //   Check the ralative positions of the remaining characters
  for (let n = 0; n < tElementIndex.length; n++) {
    if (tElementIndex[n] > tElementIndex[n + 1]) {
      return false;
    }
  }
  return true;
};
