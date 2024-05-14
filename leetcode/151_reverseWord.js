// touch 151_reverseWord
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arrOfWords = s.trim().split(" ");
  const filteredArr = arrOfWords.filter((word) => word !== "");
  //   console.log(arrOfWords);
  //   console.log(filteredArr);
  /* let words = s.split(/\s+/).reverse(); */
  return filteredArr.reverse().join(" ");
};

const test = reverseWords("a good   example");
console.log(test);
