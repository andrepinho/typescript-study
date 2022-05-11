// https://leetcode.com/problems/roman-to-integer

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

import { test } from "../test-utils";
import { lookAheadAndSkip } from "./look-ahead-and-skip";
import { replaceAndReduce } from "./replace-and-reduce";

type RomanSymbol = "I" | "V" | "X" | "L" | "C" | "D" | "M";

export const valuesBySymbol: Record<RomanSymbol, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const testCases: [string, number][] = [
  ["I", 1],
  ["II", 2],
  ["III", 3],
  ["IV", 4],
  ["V", 5],
  ["VI", 6],
  ["VII", 7],
  ["VIII", 8],
  ["LVIII", 58],
  ["IX", 9],
  ["X", 10],
  ["LVIII", 58],
  ["MCMXCIV", 1994],
  ["MCMXCV", 1995],
];

test(lookAheadAndSkip, testCases);
test(replaceAndReduce, testCases);
