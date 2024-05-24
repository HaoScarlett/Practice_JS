// 6_zigzagConversion
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// numRows = 1
// numRows > s.length
var convert = function (s, numRows) {
  // handle edge cases
  if (s.length === 1 || numRows >= s.length) {
    return s;
  }

  // Initalize an array of string to store every row's sub string
  const rows = Array(numRows).fill("");

  //initialize a pointer to track the current row and a tracker to determine the direction
  let currentRow = 0;
  let goingDown = true;

  // loop through the s and append it to the current row
  for (let i = 0; i < s.length; i++) {
    if (goingDown === true) {
      rows[currentRow] = rows[currentRow].concat(s[i]);
      currentRow++;
      if (currentRow === numRows - 1) {
        goingDown = false;
      }
    }

    if (goingDown === false) {
      currentRow = currentRow - 1;
      rows[currentRow] = rows[currentRow].concat(s[i]);
      // adjust the two pointers as per the zigzag rules
      // if currentRow = 0, re-start next zigzag pattern
      if (currentRow === 0) {
        // currentRow = 0;
        goingDown = true;
      }
    }
  }

  // join all strings in 'rows'
  return rows.join("");
};
