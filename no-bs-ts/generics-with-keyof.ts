function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const cats = [
  { name: "Kiara", color: "white" },
  { name: "Joana", color: "black" },
  { name: "Romeo", color: "black & white" },
];

console.log(pluck(cats, "name"));
console.log(pluck(cats, "color"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkoutEvent: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCart", {
  time: 1,
  user: "bob",
  quantity: 1,
  productId: "something",
});
sendEvent("checkoutEvent", { time: 1, user: "bob" });
