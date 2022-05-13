export function slidingWindowWithString(s: string): number {
  let theSubstring = "",
    maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i];

    const positionInSubstring = theSubstring.indexOf(currentCharacter);

    theSubstring += currentCharacter;

    if (positionInSubstring != -1) {
      theSubstring = theSubstring.substring(positionInSubstring + 1);
    }

    if (theSubstring.length > maxLength) {
      maxLength = theSubstring.length;
    }
  }

  return maxLength;
}
