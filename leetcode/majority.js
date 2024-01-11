// 169. Majority ELement

var majorityElement = function (nums) {
  //   Handle the edge case
//   if (nums.length < 2) {
//     return nums;
//   }

  // Sort nums first
  nums.sort();
  // Count the frequency of an element in nums
  let counter = 0;
  let comparePointer = 0;
  for (let i = 0; i < nums.length; i++) {
    // If reader pointer meet a new element,
    // count the frequency of the previous one
    if (nums[i] != nums[comparePointer]) {
      counter = i - comparePointer;
      //   if the element isn't the majority, move the compare pointer to next element
      if (counter < nums.length / 2) {
        comparePointer = i;
      }
      return nums[comparePointer];
    }
  }
};

