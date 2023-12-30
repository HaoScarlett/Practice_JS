var removeDuplicates = function (nums) {
    // Iterate every element in the array
    // if i = k, i moves forward; i != k, k write and move forward;
    // return k;
    if (nums.length < 2) {
        return nums;
    } 
    let writePointer = 0; // k

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[writePointer]) {
        writePointer++;
        nums[writePointer] = nums[i];
      }
    }
    return writePointer + 1;
};
