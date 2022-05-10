let UserName: string = "Andre";
let hasLoggedIn: boolean = true;

UserName += " Pinho";

console.log(hasLoggedIn);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = UserName.split(" ");
const myValues: Array<number> = [1, 2, 3, 4];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "André",
  last: "Pinho",
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

if (ids[30] === "D") {
  console.log(ids[30]);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3, 4].forEach((i) => console.log(i));

const out: number[] = [5, 6, 7, 8].map((v) => v * 10);
