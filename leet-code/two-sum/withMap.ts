import { InputType, OutputType } from "./index";

export function withMap([nums, target]: InputType): OutputType {
  let mappedValues: Record<number, number> = {};
  let result: OutputType = [0, 0];

  nums.forEach((n, i) => {
    const differenceFromTarget = target - n;

    if (differenceFromTarget in mappedValues) {
      result = [mappedValues[differenceFromTarget], i];
      return;
    }

    mappedValues[n] = i;
  });

  return result;
}
