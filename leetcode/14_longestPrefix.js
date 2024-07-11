// 14_longestPrefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0 || strs === "") {
        return "";
    }
    let prefix = strs[0];
    const output = [];
    for (let i = 0; i < strs.length; i++) {
        // compare the current prefix with each string in the array
        while (strs[i].indexOf(prefix) !== 0) {
            
        } 
        
    }
};

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// const array = [2, 9, 9];
// array.indexOf(2); // 0
// array.indexOf(7); // -1