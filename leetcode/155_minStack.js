// 155_minStack

class MinStack {
  constructor() {
    constructor();
    {
      this.stack = [];
      this.minStack = [];
    }
  }
  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    // if the minStack is empty or the pushed value is less or equal to the top
    // of the minStack, push val onto Minstack as wee
    if (this.minStack.length === 0 || val <= this.minStack.top()) {
      this.minStack.push(val);
    }
  }
  /**
   * @return {void}
   */
  pop() {
    if (this.stack.length === 0) {
      return;
    }
    this.stack.pop();
    // if the poped value is equal to the top of the minStack, pop from minStack as well
    if (this.stack.pop() === this.minStack.top()) {
      this.minStack.pop();
    }
  }
  /**
   * @return {number}
   */
  top() {
    if (this.stack.length === 0) {
      return;
    }
    return this.stack.pop();
  }
  /**
   * @return {number}
   */
  getMin() {
    return this.minStack.pop();
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
