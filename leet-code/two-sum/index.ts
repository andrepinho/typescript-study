// https://leetcode.com/problems/two-sum/

import { test } from "../test-utils";
import { bruteForce } from "./bruteForce";
import { withMap } from "./withMap";

// Given an array of integers nums and an integer target
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// You can return the answer in any order.

// Constraints
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109

export type InputType = [number[], number];
export type OutputType = [number, number];

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

test(withMap, testCases);

test(bruteForce, testCases);
