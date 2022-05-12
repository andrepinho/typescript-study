import { InputType, OutputType } from "./index";

export function withMap([nums, target]: InputType): OutputType {
  let map: Record<number, number> = {};
  let result: OutputType = [0, 0];

  nums.forEach((n, i) => {
    const key = target - n;

    if (key in map) {
      result = [map[key], i];
      return;
    }

    map[n] = i;
  });

  return result;
}
