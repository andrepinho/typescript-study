// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

import { test } from "../test-utils";

const testCases: [number, number][] = [
  [0, 0],
  [1, 1],
  [2, 2],
  [14, 6],
  [8, 4],
  [123, 12],
];

function numberOfSteps(num: number): number {
  let n = num;
  let count = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n--;
    }

    count++;
  }

  return count;
}

test(numberOfSteps, testCases);
