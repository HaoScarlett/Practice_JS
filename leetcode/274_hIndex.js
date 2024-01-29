// 274. H-Index

var hIndex = function (citations) {
  // citations = papers = h
  // Sort the array in descending order
  // When citation is greater or equal to papers, h increment
  if (citations.length === 1) {
    if (citations[0] === 0 || citations[0] === "") {
      return 0;
    } else if (citations[0] === 1) {
      return 1;
    }
  }

  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length - 1; i++) {
    const hIndex = 0;
    if (citations[i] >= citations.length) {
      hIndex++;
    }
  }
  return hIndex;
};
