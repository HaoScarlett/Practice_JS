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
    if (freqMap[char]) {
      freqMap[char]++;
    } else {
      freqMap[char] = 1;
    }
  }

  // Checking each letter in ransomNote with Map
  for (let noteChar of ransomNote){
      // if there's no matching key, return false
        if (freqMap.has(ransomNote[noteChar])=== false){
            return false;
        }
        // if there's a key correspond with the letter
        else {
            // true: check the value
                // value != 0, decrement 1
                // value = 0, return false 
            const frequencies = freqMap.noteChar;
            if(frequencies != 0){
                frequencies--;
            }
            else{
                return false;
            }
        }
  }
  // Handling frequencies

  // Final check
};
