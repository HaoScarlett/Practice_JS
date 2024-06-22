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
    if (this.stack.length > 0) {
      const removedValue = this.stack.pop();
      // if the poped value is equal to the top of the minStack, pop from minStack as well
      if (removedValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
    }
  }
  /**
   * @return {number}
   */
  top() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
    return null;
  }
  /**
   * @return {number}
   */
  getMin() {
    if (this.minStack.length > 0) {
      // without changing the length of this.stack
      return this.minStack[this.minStack.length - 1];
    }
    return null;
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
// Test case
// const minStack = new MinStack();
// minStack.push(5);
// minStack.push(3);
// minStack.push(7);
// minStack.push(1);
// console.log(minStack.getMin()); // Expected: 1
// minStack.pop();
// console.log(minStack.getMin()); // Expected: 3
// minStack.pop();
// console.log(minStack.top());    // Expected: 3
// console.log(minStack.getMin()); // Expected: 3

// Test case
// const minStack = new MinStack();
// minStack.push(2);
// minStack.push(0);
// minStack.push(3);
// minStack.push(0);
// console.log(minStack.getMin()); // Expected: 0
// minStack.pop();
// console.log(minStack.getMin()); // Expected: 0
// minStack.pop();
// console.log(minStack.getMin()); // Expected: 0
// minStack.pop();
// console.log(minStack.getMin()); // Expected: 2
