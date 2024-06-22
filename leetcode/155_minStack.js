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
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
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
    const removedValue = this.stack.pop();
    // if the poped value is equal to the top of the minStack, pop from minStack as well
    if (removedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }
  /**
   * @return {number}
   */
  getMin() {
    // without changing the length of this.stack
    return this.minStack[this.stack.length - 1];
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
