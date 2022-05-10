function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a: T[], v: T) => (filterFunc(v) ? [...a, v] : a), []);
}

console.log(myFilter([1, 2, 3, 4, 5], (v) => v % 2 === 0));
