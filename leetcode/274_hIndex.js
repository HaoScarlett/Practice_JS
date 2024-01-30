// 274. H-Index

var hIndex = function (citations) {
  // citations = papers = h

  // Handle the edge case
  if (citations.length === 1) {
    if (citations[0] === 0 || citations[0] === "") {
      return 0;
    } else if (citations[0] === 1) {
      return 1;
    }
  }
  // Sort the array in descending order
  // When citation is greater or equal to its position, h increment

  citations.sort((a, b) => b - a);

  let hIndex = 0;

  for (let i = 0; i < citations.length - 1; i++) {
    if (citations[i] >= i) {
      hIndex++;
    }
  }
  return hIndex;
};
