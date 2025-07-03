function chunkArray(arr, n) {
  // Your implementation
  const res = [];

  for (let i = 0; i < arr.length; i += n) {
    res.push(arr.slice(i, i + n));
  }
  return res;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]

// module.exports = chunkArray;
