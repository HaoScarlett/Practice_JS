// 2635 - Apply transformation over each element in Array
// Given an integer array arr and a mapping function fn
// return a new array with a transformation applied to each element.
var map = function (arr, fn) {
    let returnedArray = [];
    for (let i = 0; i < arr.length; i++) {
        returnedArray[i] = fn(arr[i], i);
    }
    return returnedArray;
};
