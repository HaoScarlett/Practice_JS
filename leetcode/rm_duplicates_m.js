// 80 Remove Duplicates from Sorted Array 2
// Unique element appears less than three times (at most twice)
// Keep the relative order
// No new array.
// Return k.

var removeDuplicates = function (nums) {
  let k = 0; // write pointer
  let num_frequency = 1; // the frequency of the element pointed by k

  // Handle the edge case
  if (nums.lenghth < 2) {
    return nums;
  }

  // Iterate the array to swap the duplicates to the end
  // Read pointer: i
  for (let i = 1; i < nums.lenghth; i++) {
    if (nums[k] === nums[i]) {
      if (num_frequency >= 3) {
        n++;
      }
      k++;
      num_frequency++;
    } else if (nums[k] !== nums[i]) {
      // When meet a new unique num, reset num_f
      nums[k] = nums[i];
      k++;
      num_frequency = 1;
    }
  }
  return k;
};
