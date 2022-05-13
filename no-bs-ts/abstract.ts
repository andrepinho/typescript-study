abstract class StreetfFigther {
  constructor() {}

  move() {}
  fight() {
    console.log(`atack with ${this.getSpecialAtack()}`);
  }

  abstract getSpecialAtack(): string;
  abstract get name(): string;
}

class Ryu extends StreetfFigther {
  getSpecialAtack(): string {
    return "Haduken";
  }

  get name(): string {
    return "Ryu";
  }
}

class ChunLi extends StreetfFigther {
  getSpecialAtack(): string {
    return "Lightning Kick";
  }

  get name(): string {
    return "Chun-Li";
  }
}

const ryu = new Ryu();

console.log(ryu.getSpecialAtack());
ryu.fight();

const chunLi = new ChunLi();
chunLi.fight();
