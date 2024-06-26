// 58. Length of Last Word

// Start from the end of the string s, loop through every char
// Track the first " " and the second non-consecutive " ",
// Transform their index to indexEnd and indexStart
// Use .slice() to get the substring(last word)
// Time complexity: O(n)-- num of spaces and chars
// Space complexity: O(n) -- substring.length

var lengthOfLastWord = function (s) {
  // Create two index trackers
  let indexEnd;
  let indexStart;

  for (let i = s.length - 1; i > 0; i--) {
    // check if the first space after the last word
    if (s[i] === " " && s[i-1] !== " ") {
        indexEnd = i;
    }

    // search for the next valid space
    if (s[i] !== " " && s[i - 1] === " ") {
        indexStart = i;
        break;
    }
  }

  // let substring = s.slice(indexStart, indexEnd);
  let substring = s.substring(indexStart, indexEnd);
  return substring.length;
};
