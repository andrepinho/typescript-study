function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((_pv, cv) => {
    forEachFunc(cv);
    return undefined;
  }, undefined);
}

myForEach(["a", "b", "c"], (v) => console.log(v + "hey"));
