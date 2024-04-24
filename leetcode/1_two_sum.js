// 1_two_sum.js

// find complement of each num in nums: complement = target - nums[i]

// Use hash map to store key-value pairs for efficient look-ups
// Key: nums[i], Value: index(i)
// Notice: hash map key, collision. -- ex:[3,3]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Create a map to note the key-value pairs for further search
  const numsMap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!numsMap.has(nums[i])) {
//       numsMap.set(nums[i], i);
//     }
//   }

  // Iterate through the nums, find each num's complement,
  // Search the complement in the rest num to find if there's a matching num
  for (let j = 0; j < nums.length; j++) {
    const complement = target - nums[j];
    // Search complement in numsMap
    if (numsMap.has(complement)) {
      // if complement exists, use the indices from the hash map and the current index
      return [numsMap.get(complement), j];
    } else {
        // if complement dosen't exist, add the current ele and its index to the hash map
        numsMap.set(nums[j], j);
    }
  }
};
