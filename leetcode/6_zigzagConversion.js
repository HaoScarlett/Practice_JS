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
  let i = 0;
  let directionTrack = 0;

  while (i < s.length) {
    // in every pattern, turning point is 
    if (directionTrack < numRows) {
      subStrings[i] = s[i];
      i++;
      directionTrack++;
    } else if (directionTrack === numRows) {
        subStrings[numRows] = s[i];
        i++;
        directionTrack++;
    } else if (directionTrack > numRows) {
        subStrings[i - 1] = s[i];
        i--;
        directionTrack++;
        if(directionTrack  === 2*(s.length - 1)){
            directionTrack = 0;
        }
    }
  }
};
