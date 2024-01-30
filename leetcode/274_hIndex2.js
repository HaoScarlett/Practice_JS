// 274. H-Index
var hIndex = function (citations) {
  // Handle edge cases
  if (citations.length === 1) {
    return citations[0] === 0 ? 0 : 1;
  }
  // count each papers citations with current papers
  // Only increment hIndex when citations is greater than papers
  let hIndex = 0;
  let numOfPaper = citations.length+1;
  for (let i = 0; i < numOfPaper; i++) {
    if (citations[i] === 0) {
      numOfPaper--;
    } else {
      if (citations[i] >= numOfPaper) {
        hIndex++;
      }
    }
  }
  return hIndex;
};
