import { test } from "../test-utils";
import { slidingWindowWithMap } from "./slidingWindowWithMap";
import { slidingWindowWithString } from "./slidingWindowWithString";
import { withSet } from "./withSet";

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const testCases: [string, number][] = [
  ["", 0],
  ["a", 1],
  ["aa", 1],
  ["abcabcbb", 3],
  ["bbbbbbb", 1],
  ["pwwkew", 3],
  ["abcdeabcdefabcdd", 6],
  [
    "pwwkewahsdklfhakjsdhfkjahskdjrhkl3j2h4kj32h4ruitnaleghnraliufdh gayrf98ay4w89rhaqweuirfahudghakjrh234rkjnas",
    15,
  ],
  [
    "abcdefghijklmnopqrstuvxyz1234567890-?/.,<>pwwkewahsdklfhakjsdhfkjahskdjrhkl3j2h4kj32h4ruitnaleghnraliufdh gayrf98ay4w89rhaqweuirfahudghakjrh234rkjnasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    42,
  ],
];

test(withSet, testCases);
test(slidingWindowWithMap, testCases);
test(slidingWindowWithString, testCases);
