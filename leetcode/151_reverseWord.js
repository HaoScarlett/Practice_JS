// touch 151_reverseWord
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arrOfWords = s.split(" ");
  return arrOfWords.reverse().join(" ");
};
