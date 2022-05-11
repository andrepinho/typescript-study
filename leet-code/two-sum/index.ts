// https://leetcode.com/problems/two-sum/

import { test } from "../test-utils";

// Given an array of integers nums and an integer target
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// You can return the answer in any order.

// Constraints
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109

type InputType = [number[], number];
type OutputType = [number, number];

const testCases: [InputType, OutputType][] = [
  [
    [[2, 7, 11, 15], 9],
    [0, 1],
  ],
  [
    [[3, 2, 4], 6],
    [1, 2],
  ],
  [
    [[3, 3], 6],
    [0, 1],
  ],
  [
    [[4, 5, 6, 7, 0, 1, 2], 1],
    [4, 5],
  ],
];

function bruteForce([nums, target]: InputType): OutputType {
  let result: OutputType | null = null;
  nums.forEach((n1, i1) => {
    nums.slice(i1 + 1).forEach((n2, i2) => {
      const realI2 = i1 + 1 + i2;

      const n1n2Sum = n1 + n2;

      if (n1n2Sum == target) {
        result = [i1, realI2];
      }
    });
  });

  return result || [0, 0];
}

test(bruteForce, testCases);
