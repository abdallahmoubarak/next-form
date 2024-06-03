"use client";
import { Reorder } from "framer-motion";
import { useState } from "react";
import { Item } from "./ReorderItem";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function ReorderList() {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <Reorder.Group
        values={items}
        onReorder={setItems}
        className="relative flex flex-col gap-4 py-4">
        {items.map((item) => (
          <Item key={item} item={item.toString()} />
        ))}
      </Reorder.Group>
    </>
  );
}
