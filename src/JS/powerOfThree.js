function isPowerOfThree(n) {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}
isPowerOfThree(27);
// module.exports = { isPowerOfThree };
