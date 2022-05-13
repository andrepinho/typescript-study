export function withSet(s: string): number {
  let longestStreak = 0;

  const arr = [...s];

  for (let i1 = 0; i1 < arr.length; i1++) {
    const c1 = arr[i1];

    let taken = new Set();
    taken.add(c1);
    let currentStreak = 1;

    for (let i2 = i1 + 1; i2 < arr.length; i2++) {
      const c2 = arr[i2];

      if (taken.has(c2)) {
        break;
      } else {
        currentStreak++;
        taken.add(c2);
      }
    }

    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
    }
  }

  return longestStreak;
}
