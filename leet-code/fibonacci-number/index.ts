// https://leetcode.com/problems/fibonacci-number/

import { test } from "../test-utils";

export type InputType = number;
export type OutputType = number;

const testCases: [InputType, OutputType][] = [
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5],
  [6, 8],
  [7, 13],
  [8, 21],
  [9, 34],
  [10, 55],
  [11, 89],
  [30, 832040],
];

function fib(n: number): number {
  if (n == 1 || n == 2) {
    return 1;
  }

  let memo = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

test(fib, testCases);
