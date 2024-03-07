// 383_RansomNote_Hash2
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  // Build map for two parameters
  let noteMap = new Map();
  let magazineMap = new Map();

  // Set objects properties

  // Count occurance of letters in ransomNote
  for (let char of ransomNote) {
    if (noteMap.has(char)) {
      noteMap.set(char, noteMap.get(char) + 1);
    } else {
      noteMap.set(char, 1);
    }
  }

  //   Count occurence of letters in magazine
  for (const char of magazine) {
    if (magazineMap.has(char)) {
      magazineMap.set(char, magazineMap.get(char) + 1);
    } else {
      magazineMap.set(char, 1);
    }
  }

  //   For each unique char in ransomNote
  for (let [char, count] of noteMap) {
    // check the count of char in the magazineMap >= the count in noteMap
    const magazineCount = magazineMap.get(char) || 0;
    if (magazineCount < count) {
      return false;
    }
  }
  return true;
};
