function sum(...args) {
  // Your implementation
  return args.reduce((acc, curr) => acc + curr, 0);
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

// module.exports = sum
