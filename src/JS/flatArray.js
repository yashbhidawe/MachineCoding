function flattenArray(arr) {
  // Your implementation
  // const newArr = arr.flat(Infinity);

  // return newArr;

  return arr.reduce((accumulator, currentValue) => {
    if (Array.isArray(currentValue)) {
      return accumulator.concat(flattenArray(currentValue));
    } else {
      return accumulator.concat(currentValue);
    }
  }, []);
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);

// module.exports = flattenArray
