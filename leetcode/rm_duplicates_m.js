// 80 Remove Duplicates from Sorted Array 2
// Unique element appears less than three times (at most twice)
// Keep the relative order
// No new array.
// Return k.

var removeDuplicates = function (nums) {
  let k = 0; // write pointer
  let numFrequency = 1; // Frequency of the element pointed by k

  // Handle the edge case
  if (nums.lenghth < 2) {
    return nums;
  }

  // Iterate the array to swap the duplicates to the end
  // Read pointer: i
  for (let i = 1; i < nums.lenghth; i++) {
    if (nums[i] === nums[k]) {
        num_frequency++;
        // If frequency <= 2, update write pointer and element
      if (num_frequency <= 2) {
        k++; // Update write pointer FIRST!
        nums[k]=nums[i];
      }
      //If current element is different
    } else {
        // Reset frequency for new unique element
        num_frequency = 1;
      // Update write pointer FIRST, then update the element
      k++;
      nums[k] = nums[i];
    }
  }
  return k;
};
