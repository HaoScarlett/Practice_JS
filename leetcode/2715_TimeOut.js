/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

/* - a task fn to do, wait for t ms; use cancelFn to cancel before excution */

var cancellable = function (fn, args, t) {
  // Use setTimeout to delay the execution of fn
  const timerId = setTimeout(function () {
    fn.apply(null, args);
  }, t);

  // Create and return the cancel function
  const cancelFn =()=> {
    clearTimeout(timerId);
  };
  return cancelFn;
};

/* Constraints:
fn is a function
args is a valid JSON array
1 <= args.length <= 10
20 <= t <= 1000
10 <= cancelTimeMs <= 1000 */

/* Input:
fn = (x) => x * 5
args = [2]
t = 20

Output:
[{"time": 20, "returned": 10}]

Explanation:
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs); -- to call 'cancelFN' after 50 ms
*/
/* 0ms: The 'cancellable' fn is called, and fn(2) is to be excuted after 20ms
        The 'cancelFn' is returned
   20ms: The 'setTimeout' inside 'cancellable' excutes 'fn(2)', which computes '2*5' and returns '10'
         The output at this point is {"time": 20, "returned": 10}
   50ms: The second 'setTimeout' executes 'cancelFN', but since 'fn(2)' has already
         executed at 20ms, the cancellation has no effect.
*/

