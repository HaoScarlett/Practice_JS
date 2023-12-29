var removeDuplicates = function (nums) {
  let writePointer = 0; // k
  let readPointer = 0; // i

  // Iterate every element in the array
  // if i = k, i moves forward; i != k, k write and move forward;
  // return k;

  for (let i = readPointer; i < nums.length; i++) {
    if (i === writePointer) {
      nums[i] = nums[writePointer];
    } else if (i !== writePointer) {
      writePointer++;
      nums[writePointer] = nums[i];
    }
  }
  return writePointer;
};
