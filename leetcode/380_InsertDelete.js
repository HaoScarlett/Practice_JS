// 380_InsertDelete GetRandom O(1)

/* Set: object that lets you store unique values
Insertion removal random all O(1)


*/
class RandomizedSet {
  constructor() {
    this.list = []; // define _sett as a property of the obj
    this.dict = {};
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (!this.dict.hasOwnProperty(val)) {
      return false;
    }
    this.dict[val] = this.list.length;
    this.list.push(val);
    return true;
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    // swap and pop
    // Delete a value in an arr in O(1)
    // const index = this._list.indexOf(val);
    // if (index !== -1) {
    //   this._list[index] = this._list[this._list.length - 1];
    //   this._list.pop();
    // }
    if (this.dict.hasOwnProperty(val)) {
      const lastElement = this.list[this.list.length - 1];
      const idx = this.dict[val];
      this.list[idx] = lastElement;
      this.dict[lastElement] = idx;
      // delete the last ele
      this.list.pop();
      delete this[val];
      return true;
    }
    return false;
  }
  /**
   * @return {number}
   */
  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
}
