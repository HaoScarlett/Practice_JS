// 274. H-Index

var hIndex = function (citations) {
  // citations = papers = h

  // Handle the edge case
  // if (citations.length === 1) {
  //   if (citations[0] === 0) {
  //     return 0;
  //   } else {
  //     return 1;
  //   }
  // }
  if (citations.length === 1) {
    return citations[0] === 0 ? 0 : 1;
  }

  // Sort the array in descending order
  citations.sort((a, b) => b - a);

  let hIndex = 0;

  for (let i = 0; i < citations.length; i++) {
    // h-index can only be as great as their number of publications
    if (citations[i] > i) {
      hIndex++;
    }
  }
  return hIndex;
};
