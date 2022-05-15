function isPalindrome(x: number): boolean {
  const arr = [...`${x}`];
  if (x < 0) return false;
  if (arr.length === 1) return true;

  let length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] != arr[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

export { isPalindrome as convertToArray };
