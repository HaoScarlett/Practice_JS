// 383. Ransom_Note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ransomNoteStr = [...ransomNote];
  let magazineStr = [...magazine];

  let r_pointer = 0;
  let m_pointer = 0;
  // 🔻 Assume it can be constructed
  let canConstruct = true;

  if (ransomNote.length > magazine.length) {
    return false;
  }

  while (r_pointer < ransomNoteStr.length) {
    // 🔻 Track magazine
    let charFound = false;

    // 🔻 The checking range of m_pointer is within magazine
    while (m_pointer < magazineStr.length) {
      // In one round, check the value
      if (ransomNote[r_pointer] === magazineStr[m_pointer]) {
        charFound = true;
        magazineStr.splice(m_pointer, 1); // Remove the used character
        break;
      }
      //   If no matching value found, move to the next one
      m_pointer++;
    }

    if (!charFound) {
      canConstruct = false;
      break;
    }
    // Reset the pointers
    r_pointer++;
    m_pointer = 0;
  }
  return canConstruct;
};
// Time complexity O(n*m) Space = O(m)