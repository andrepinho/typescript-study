function maxSubArray(nums: number[]): number {
  let localMaxSum = nums[0];
  let globalMaxSum = localMaxSum;

  for (let i = 1; i < nums.length; i++) {
    localMaxSum = Math.max(nums[i], localMaxSum + nums[i]);
    globalMaxSum = Math.max(globalMaxSum, localMaxSum);
  }

  return globalMaxSum;
}

export { maxSubArray as discardNegativePrefix };
