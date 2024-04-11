// 58. Length of Last Word

// Use trimEnd() to remove whitespace from the end of s
// Find the first white space

var lengthOfLastWord = function (s) {
  let sModified = s.trimEnd();

  // Handle the edge case: only one word or one char
  if (sModified.includes(" ") === false) {
    return sModified.length;
  }

  for (let i = sModified.length - 1; i > 0; i--) {
    if (sModified[i] !== " " && sModified[i - 1] === " ") {
      return sModified.substring(i).length;
    }
  }
};
