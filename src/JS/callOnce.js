function once(fn) {
  // Your code here ...
  let hasExecuted = false;
  let res;
  return function (...args) {
    if (!hasExecuted) {
      // eslint-disable-next-line no-useless-catch
      try {
        res = fn.apply(this, args);
        hasExecuted = true;
      } catch (error) {
        throw error;
      }
    }
    return res;
  };
}

once(function () {
  console.log("This function will only run once.");
})();
// module.exports = once;
