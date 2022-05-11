import { valuesBySymbol } from "./index";

function lookAheadAndSkip(s: string): number {
  let iterator = 0;
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (i < iterator) {
      continue;
    }

    const currentAlgarism = s[i].toUpperCase();
    const currentValue =
      valuesBySymbol[currentAlgarism as keyof typeof valuesBySymbol];
    const nextAlgarism = s[i + 1]?.toUpperCase();
    const nextValue =
      valuesBySymbol[nextAlgarism as keyof typeof valuesBySymbol];

    if (nextValue > currentValue) {
      sum += nextValue - currentValue;
      iterator += 2;
    } else {
      sum += currentValue;
      iterator++;
    }
  }

  return sum;
}

export { lookAheadAndSkip };
