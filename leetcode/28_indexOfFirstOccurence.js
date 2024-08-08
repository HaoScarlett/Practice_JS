// 28_indexOfFirstOccurence

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let firstIndex = null;
    let needlePointer = 0;
    let haystackPointer = 0;
    const needleLength = needle.length;
    const haystackLength = haystack.length;

    while (haystackPointer < haystackLength) {
        if (haystack[haystackPointer] === needle[needlePointer]) {
            firstIndex = haystackPointer;
            if (needlePointer === needleLength) {
                return firstIndex;
            }
            haystackPointer++;
            needlePointer++;
        }
        if (haystack[haystackPointer] !== needle[needlePointer]) {
            haystackPointer++;
            needlePointer = 0;
            if (haystackPointer === haystackLength) {
                return -1;
            }
        }
        return firstIndex;
    }
};
