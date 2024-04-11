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
    // the first char is " "
    if (s[i] === " ") {
      indexEnd = i;
    }

    // search for the next valid space
    if (s[i] !== " " && s[i - 1] === " ") {
      indexStart = i;
    }
  }

  let substring = s.slice(indexStart, indexEnd);
  return substring.length;
};
