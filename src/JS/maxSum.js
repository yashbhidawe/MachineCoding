function maxSubArray(nums) {
  // write your code  here
  let current = 0;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    max = Math.max(max, current);
    if (current < 0) {
      current = 0;
    }
  }
  return max;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

module.exports = maxSubArray;
