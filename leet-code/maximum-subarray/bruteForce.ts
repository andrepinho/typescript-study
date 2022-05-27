function maxSubArray(nums: number[]): number {
  let max = nums[0],
    length = nums.length;

  for (let i1 = 0; i1 < length; i1++) {
    const n1 = nums[i1];
    let currentMax = n1;

    for (let i2 = i1 + 1; i2 < length; i2++) {
      const n2 = nums[i2];
      currentMax += n2;

      if (currentMax > max) {
        max = currentMax;
      }

      if (n2 > max) {
        max = n2;
      }
    }
  }

  return max;
}

export { maxSubArray as bruteForce };
