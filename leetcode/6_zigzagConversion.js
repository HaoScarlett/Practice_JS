// 6_zigzagConversion
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// numRows = 1
// numRows > s.length
var convert = function (s, numRows) {
  // Initalize an array of string to store every row's sub string
  const subStrings = [];

  // Iterate through the s, every pattern repeat in every 2*(s.length - 1)
  // Keep track of the turning point to change the direction. Move the pointer to
  // the right row
  let index = 0;
  let directionTrack = false;

  while (index < s.length) {
    // in every pattern, turning point is 
    if (index < numRows) {
      subStrings[] = s[i];
      index++;
    } else if (index === numRows) {
        subStrings[numRows] = s[i];
        i++;
        directionTrack = true;
    } else if (index > numRows) {
        subStrings[i - 1] = s[i];
        i--;
        if(index  === 2*(s.length - 1)){
            directionTrack = true;
        }
    }
  }
};
