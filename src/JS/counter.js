function makeCounter(initialValue = 0) {
  let value = initialValue;
  const startValue = initialValue;

  return {
    increment() {
      return ++value;
    },
    decrement() {
      return --value;
    },
    reset() {
      value = startValue;
      return value;
    },
    getValue() {
      return value;
    },
  };
}

// module.exports = makeCounter;
