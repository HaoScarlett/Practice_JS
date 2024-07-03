// 380_InsertDelete GetRandom O(1)

/* Set: object that lets you store unique values
Insertion removal random all O(1)


*/
class RandomizedSet {
  constructor() {
    // store the actual ele in the "RS". retrieval of an ele in O(1)
    this.list = []; 
    // Dictionary to store the ele-to-index mapping
    // map each value to its index in the array. 
    // O(1): insertion and deletion by providing direct access to the ele's position in the array
    this.dict = {};
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.dict.hasOwnProperty(val)) {
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

    if (this.dict.hasOwnProperty(val)) {
      const lastElement = this.list[this.list.length - 1];
      const idx = this.dict[val];

      // swap the ele to be removed with the last ele
      this.list[idx] = lastElement;
      this.dict[lastElement] = idx;

      // delete the last ele
      this.list.pop();
      delete this.dict[val];
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
