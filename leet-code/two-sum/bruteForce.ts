import { InputType, OutputType } from "./index";

export function bruteForce([nums, target]: InputType): OutputType {
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
