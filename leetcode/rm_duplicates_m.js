// 80 Remove Duplicates from Sorted Array 2
// Unique element appears less than three times (at most twice)
// Keep the relative order
// No new array.
// Return k.

var removeDuplicates = function (nums) {
  let k = 0; // write pointer
  let num_frequency = 1; // the frequency of the element pointed by k

  // Handle the edge case
  if (nums.length < 2) {
    return nums;
  }

  // Iterate the array to swap the duplicates to the end
  // Read pointer: i
  for (let i = 1; i < nums.lenghth; i++) {
    if (nums[k] === nums[i]) {
      if (num_frequency < 2) {
        num_frequency++;
        k++;} 
        else if (nums[k] !== nums[i] && counter > 2) {
      k++;
      nums[k] = nums[i];
      num_frequency = 1;
    }
  }
  return k;
};
