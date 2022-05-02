function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

console.log(myMap([1, 2, 3, 4, 5, 6, 7], (v) => (v * 2).toString()));
