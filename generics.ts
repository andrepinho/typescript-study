function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial;

  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

const [getter, setter] = simpleState(1);

console.log(getter());
setter(2);
console.log(getter());

const [getter2, setter2] = simpleState<number | null>(null);

console.log(getter2());
setter2(2);
console.log(getter2());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => (a.rank < b.rank ? 1 : -1));

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Vaporeon",
    hp: 40,
  },
  {
    name: "Jolteon",
    hp: 30,
  },
  {
    name: "Snorlax",
    hp: 200,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);

console.log(ranks);
