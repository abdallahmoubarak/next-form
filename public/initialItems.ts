export interface ItemType {
  id: number;
  name: string;
  link: string;
}

export const initialItems: ItemType[] = [
  {
    id: 1,
    name: "🍅 Tomato",
    link: "/tomato",
  },
  {
    id: 2,
    name: "🥒 Cucumber",
    link: "/cucumber",
  },
  {
    id: 3,
    name: "🧀 Cheese",
    link: "/cheese",
  },
  {
    id: 4,
    name: "🥬 Lettuce",
    link: "/lettuce",
  },
];
