export function slidingWindowWithMap(s: string) {
  let lastIndexByValue: Record<string, number> = {},
    longestLength = 0,
    left = 0;

  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i];

    if (currentCharacter in lastIndexByValue) {
      const newPosition = lastIndexByValue[currentCharacter] + 1;
      if (left < newPosition) {
        left = newPosition;
      }
    }

    lastIndexByValue[currentCharacter] = i;

    const currentLength = i + 1 - left;

    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
  }

  return longestLength;
}
