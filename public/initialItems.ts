export interface ItemType {
  id: number;
  name: string;
  link: string;
  price: number;
}

export const initialItems: ItemType[] = [
  {
    id: 1,
    name: "🍅 Tomato",
    link: "/tomato",
    price: 3,
  },
  {
    id: 2,
    name: "🥒 Cucumber",
    link: "/cucumber",
    price: 2,
  },
  {
    id: 3,
    name: "🧀 Cheese",
    link: "/cheese",
    price: 4,
  },
  {
    id: 4,
    name: "🥬 Lettuce",
    link: "/lettuce",
    price: 2,
  },
];
