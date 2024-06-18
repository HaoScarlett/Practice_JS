/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

/* - a task fn to do, wait for t ms; use cancelFn to cancel before excution */

var cancellable = function (fn, args, t) {
  const timerId = setTimeout(function () {
    fn.apply(null, args);
  }, t);
  const cancelFn = function () {
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
