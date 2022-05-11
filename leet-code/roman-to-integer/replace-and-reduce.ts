import { valuesBySymbol } from "./index";

function replaceAndReduce(s: string): number {
  const romanishString = s
    .replace("IV", "IIII")
    .replace("IX", "VIIII")
    .replace("XL", "XXXX")
    .replace("XC", "LXXXX")
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC");

  return [...romanishString]
    .map((roman) => valuesBySymbol[roman as keyof typeof valuesBySymbol])
    .reduce((prev, current) => {
      return (prev += current);
    }, 0);
}

export { replaceAndReduce };
