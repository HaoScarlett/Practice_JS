// 274. H-Index
var hIndex = function (citations) {
  // Handle edge cases
  if (citations.length === 1) {
    return citations[0] === 0 ? 0 : 1;
  }
  // count each papers citations with current papers
  // Only increment hIndex when citations is greater than papers
  let hIndex = 0;
  let numOfPaper = citations.length + 1;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= numOfPaper) {
      hIndex++;
    }
      numOfPaper--;//Decrement the number of remaining papers
  }
  return hIndex;
};
