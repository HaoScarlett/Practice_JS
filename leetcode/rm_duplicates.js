var removeDuplicates = function (nums) {
  let writePointer = 0; // k
  // Iterate every element in the array
  // if i = k, i moves forward; i != k, k write and move forward;
  // return k;
  if (nums.length < 2) {
    return nums;
  } else if (nums.length === 2 && nums[0] !== nums[1]) {
    return nums.slice(); // Return a copy of the array
  } else if (nums.length === 2 && nums[0] === nums[1]) {
    return nums[0];
  } else if (nums.length > 2) {
    for (let i = 1; i < nums.length + 1; i++) {
      if (nums[i] === nums[writePointer]) {
        nums[writePointer] = nums[writePointer];
      } else if (nums[i] !== nums[writePointer]) {
        writePointer++;
        nums[writePointer] = nums[i];
      }
    }
    return writePointer;
  }
};
