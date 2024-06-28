// 380_InsertDelete GetRandom O(1)

/* Set: object that lets you store unique values



*/
var RandomizedSet = function () {
  this._set = []; // define _sett as a property of the obj
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this._set.includes(val)) {
    return false;
  } else {
    this._set.push(val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // swap and pop
  // Delete a value in an arr in O(1)
  const index = this._set.indexOf(val);
  if (index !== -1) {
    this._set[index] = this._set[this._set.length - 1];
    this._set.pop();
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this._set.length);
  return this._set[randomIndex];
};

