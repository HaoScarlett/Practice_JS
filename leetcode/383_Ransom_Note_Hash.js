// 383_Ransom_Note_Hash
// When approaching problems where one needs to keep track of
// how frequently a certain elements occurs
var canConstruct = function (ransomNote, magazine) {
  // Edge case
  if (ransomNote.length > magazine.length) {
    return false;
  }

  // Build the Frequency Map of magazine
  let freqMap = new Map();
  for (let char of magazine) {
    if (freqMap.has(char)) {
      freqMap.set(char, freqMap.get(char) + 1);
    } else {
      freqMap.set(char, 1);
    }
  }

  // Checking each letter in ransomNote with Map
  for (let noteChar of ransomNote) {
    if (freqMap.has(noteChar)) {
      // true: check the value
      // value != 0, decrement 1
      // value = 0, return false
      const frequencies = freqMap.get(noteChar);
      if (frequencies != 0) {
        freqMap.set(noteChar, frequencies - 1);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};
