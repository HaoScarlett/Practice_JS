// 274. H-Index Counting Algorithm
var hIndex = function (citations) {
  // n is the lengh of the citations
  let n = citations.length;
  // Initialize the count arr
  let count = Array(n + 1).fill(0);

  // Step 1. Count the frequency of each citation
  // if we have a paper of 5 citations, we check if there're
  // at least 5 papers with 5 citations each.
  //   🧩 Use for...of
  for (let citation of citations) {
    if (citation > n) {
      // If citation is greater than n, count it in the last index
      count[n]++;
    }
    count[citation]++;
  }

  // Step 2. Accumulate counts backward to find the h-index
  // We keep doing this, going down from the highest likes to lower ones,
  // until we find the biggest number where a researcher has at least that many papers,
  // and each paper has been liked or mentioned at least that many times.

  let hIndexValue = 0;
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += count[i];
    // Step 3. Check if the current index satisfies h-index condition
    if (sum >= i) {
      hIndexValue = i;
      break;
    }
  }
  return hIndexValue;
};
