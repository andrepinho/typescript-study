const valuesBySymbol = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
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

const testCases = [
  ["I", 1],
  ["II", 2],
  ["III", 3],
  ["IV", 4],
  ["V", 5],
  ["VI", 6],
  ["VII", 7],
  ["VIII", 8],
  ["IX", 9],
  ["X", 10],
  ["LVIII", 58],
  ["MCMXCIV", 1994],
] as const;

testCases.forEach(([input, output]) => {
  if (romanToInt(input) != output)
    console.log({
      input,
      expected: output,
      got: romanToInt(input),
    });
});
