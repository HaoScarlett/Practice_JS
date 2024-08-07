// 28_indexOfFirstOccurence

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let firstIndex = null;
    const needlePointer = 0;
    const haystackPointer = 0;
    let index = 0; {
        while (haystackPointer < haystack.length) {
            if (haystack[haystackPointer] !== needle[needlePointer]) {
                haystackPointer++;
                if (haystackPointer === haystack.length) {
                    return -1;
                }
            }
            if (haystack[haystackPointer === needle[needlePointer]]) {
                haystackPointer++;
                needlePointer++;
                if (needlePointer === needle.length) {
                    return haystackPointer - needle.length + 1;
                }
                if (haystack[haystackPointer] !== needle[needlePointer]) {
                    return -1;
                }
            }
            return haystackPointer - needle.length + 1;
        }
    }
};