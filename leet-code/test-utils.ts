import lodash from "lodash";

function isEqual<T>(arg1: T, arg2: T) {
  return lodash.isEqual(arg1, arg2);
}

function test<InputType, OutputType>(
  func: (i: InputType) => OutputType,
  testCases: readonly [InputType, OutputType][]
): void {
  console.time(func.name);
  testCases.forEach(([input, expectedOutput]) => {
    const actualOutput = func(input);
    if (!isEqual(actualOutput, expectedOutput))
      console.log(
        `Fail. Expected ${expectedOutput} but got ${actualOutput}. Input was: ${JSON.stringify(
          input
        )}`,
        "\n"
      );
  });
  console.timeEnd(func.name);
}

export { test };
