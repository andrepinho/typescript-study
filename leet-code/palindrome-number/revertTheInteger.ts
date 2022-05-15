function removeRightDigit(n: number): number {
  return Math.floor(n / 10);
}

function getLeftDigit(n: number): number {
  return n % 10;
}

function addZeroAtTheEnd(n: number): number {
  return n * 10;
}

function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let revertedInteger = 0;

  for (
    let theInteger = x;
    theInteger >= 1;
    theInteger = removeRightDigit(theInteger)
  ) {
    revertedInteger =
      addZeroAtTheEnd(revertedInteger) + getLeftDigit(theInteger);
  }

  return revertedInteger === x;
}

export { isPalindrome as revertTheInteger };
