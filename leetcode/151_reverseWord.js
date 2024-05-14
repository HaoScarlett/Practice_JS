// touch 151_reverseWord
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arrOfWords = s.trim().split(" ");
  console.log(arrOfWords);
  return arrOfWords.reverse().join(" ");
};

const test = reverseWords("a good   example");
console.log(test);
