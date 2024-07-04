// 238_ Product Of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n) time constrain
// var productExceptSelf = function(nums) {

// };


const nums = [1, 2, 3, 4]
const output = [24, 12, 8, 6]
const output1 = []
for (let i = 0; i < 4; i++) {
    let result = nums[i] * nums[i + 1]
    // console.log(result)
    output1.push(result)
}
console.log(output1) // [2,6,12,NaN]
const output2 = []
for (let j = 4; j > 0; j--) {
    let num = output1[j] * nums[j-1];
    output2.push(num)
}
console.log(output2) // [ NaN, NaN, 24, 6 ]
