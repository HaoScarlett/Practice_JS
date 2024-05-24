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
  if (s.length <= numRows || numRows === 1) {
    return s;
  }

  // Initalize an array of string to store every row's sub string
  const rows = Array(numRows).fill("");

  //initialize a pointer to track the current row and a tracker to determine the direction
  let currentRow = 0;
  let goingDown = false;

  // loop through the s and append it to the current row
  let index = 0;
  while (index < s.length) {
    // Append the current char to the current row
    rows[currentRow] += s[index];

    // detect whether the currentRow reach the turning point
    // adjust the direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    // move up or down based on direction
    goingDown ? currentRow++ : currentRow--;

    index++;
  }

  // join all strings in 'rows'
  return rows.join("");
};
