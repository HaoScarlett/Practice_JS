// 238_ Product Of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n) time constrain
// nums = [1,2,3,4]
var productExceptSelf = function (nums) {
    // create prefix array
    const prefixArr = [];
    let acc = 1;
    for (let i = 0; i < nums.length; i++) {
        acc = acc * nums[i];
        prefixArr.push(acc);
    }
    // prefixArr = [1,2,6,24]

    // create suffix array
    const suffixArr = [];
    let accSuff = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        accSuff = accSuff * nums[j];
        suffixArr.unshift(accSuff)
    }
    // suffixArr = [24,24,12,4]
    const result = []
    // products calculation
    // for each index pre up to i-1 * suf starting from i+1
    for (let t = 0; t < nums.length; t++) {
        if (t - 1 < 0) {
            result.push(suffixArr[t+1])
        }
        else if (t + 1 >= nums.length) {
            result.push(prefixArr[t-1])
        } else {
            result.push(prefixArr[t - 1] * suffixArr[t + 1]);
        }
    }

    return result;
};



