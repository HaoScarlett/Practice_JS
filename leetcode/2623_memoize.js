// 2623. Memoize
// Let's build a helper machine
// Memoization only works correctly for pure functions
// Mind the memory, you could call the fn with dif inputs indefinitely.

// Check if the answer has already knew before call fns
// Keep track of how many times the same question has been asked

/*
For "call", perform the calculation
For "getCallCount", provide the num of times a specific fn has been called
 */

/* Implement Memoization 
- Use a data struct to store previously calculated results
- "Call": check it the result for the given input is in the memoization data struct, yes-return result
- no-calculate the result using the fn, store it in data struct, return the result
- "getCallCount", return the corresponding num of times
*/

function memoize(fn) {
  let memo = {};
  //   let call_counts = {
  //     sum: 0,
  //     fib: 0,
  //     factorial: 0,
  //   };
  return function (...args) {
    // Convert the arr of arguments into a string to use as a memo key
    const key = JSON.stringify(args);

    // Check if the result if already in the memo
    // if (action === "call") {
    // checke memoization
    if (memo.hasOwnProperty(key)) {
      return memo[key];
    } else {
      // call the fn and update memoization
      const result = fn(...args);
      // Update call count
      memo[key] = result;
      return result;
    }
  };
}
