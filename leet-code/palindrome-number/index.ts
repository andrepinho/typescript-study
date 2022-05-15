import { test } from "../test-utils";
import { convertToArray } from "./convertToArray";
import { revertTheInteger } from "./revertTheInteger";

// https://leetcode.com/problems/palindrome-number/

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
//     For example, 121 is a palindrome while 123 is not.

// Constraints:
// -231 <= x <= 231 - 1

const testCases: [number, boolean][] = [
  [0, true],
  [22, true],
  [333, true],
  [4444, true],
  [121, true],
  [1001, true],
  [10, false],
  [-1, false],
  [-121, false],
  [1002, false],
];

test(revertTheInteger, testCases);

test(convertToArray, testCases);
