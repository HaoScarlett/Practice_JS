var removeDuplicates = function (nums) {
  let writePointer = 0; // k
  // Iterate every element in the array
  // if i = k, i moves forward; i != k, k write and move forward;
  // return k;
    if (nums.length < 2){
        return nums;
    }
    else {
        for (let i = 1; i < nums.length; i++) {
          if (i === writePointer) {
            nums[writePointer] = nums[writePointer];
          } else if (i !== writePointer) {
            nums[writePointer++] = nums[i];
          }
        }
        return writePointer;
    }
};
