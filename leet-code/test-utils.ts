function test<InputType, OutputType>(
  func: (i: InputType) => OutputType,
  testCases: readonly [InputType, OutputType][]
): void {
  console.time(func.name);
  testCases.forEach(([input, expectedOutput]) => {
    const result = func(input);
    if (result !== expectedOutput)
      console.log(`Fail. Expected ${expectedOutput} but got ${result}`, "\n");
  });
  console.timeEnd(func.name);
}

export { test };
