// 1_two_sum.js

/* Finds two indices such that the values at these indices add up to the target.
// find complement of each num in nums: complement = target - nums[i]
 * Utilizes a hash map to store the values and their indices for efficient lookup. */
// Key: nums[i], Value: index(i)
// Notice: hash map key, collision. -- ex:[3,3]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Create a map to note the key-value pairs
  const indexMap = new Map();

  // Iterate through the nums, find each num's complement,
  // Search the complement in the rest num to find if there's a matching num
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    // Check if complement exists in numsMap
    if (indexMap.has(complement)) {
      // if found, use the indices from the hash map and the current index
      return [indexMap.get(complement), index];
    }
    // if not found, add the current ele and its index to the hash map
    indexMap.set(nums[index], index);
  }
};
