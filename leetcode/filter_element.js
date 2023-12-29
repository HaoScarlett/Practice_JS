// 2634. Filter Elements from Array
var filter = function (arr, fn) {
    let newArr = new Array(arr.length);
    let size = 0;
    for (let arrElement of arr) {
        if (fn(arrElement, arr.indexOf(arrElement))) {
            newArr[size] = arrElement;
            size++;
        }
    }
    return newArr.slice(0, size);
};