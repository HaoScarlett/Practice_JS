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
    for (let i = 0; i < strs.length; i++) {
        // check if the current string starts with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            // if prefix is an empty string
            if (prefix === '') {
                return ''
            }
        }
    }
    return prefix;
};

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// const array = [2, 9, 9];
// array.indexOf(2); // 0
// array.indexOf(7); // -1