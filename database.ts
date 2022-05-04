interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storeState: string): void;
}

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};

  get(id: string): string {
    return this.db[id];
  }

  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storeState: string): void {
    this.db = JSON.parse(storeState);
  }
}

const myDB = new PersistentMemoryDB();
myDB.set("foo", "bar");
// myDB.db["foo"] = "baz";
console.log(myDB.get("foo"));
const saved = myDB.saveToString();
myDB.set("foo", "buzz");
console.log(myDB.get("foo"));

const otherDB = new PersistentMemoryDB();
otherDB.restoreFromString(saved);
console.log(otherDB.get("foo"));
