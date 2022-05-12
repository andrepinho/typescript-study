class Doggy {
  constructor(public readonly name: string, public age: number) {}
}

const rex = new Doggy("Rex", 13);
// rex.name = "Foo";
console.log(rex.name);

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog(rex);

console.log(DogList.instance.getDogs());
// const dl = new DogList();
