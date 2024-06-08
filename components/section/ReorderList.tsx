"use client";
import { Reorder } from "framer-motion";
import { useState } from "react";
import { Item } from "./ReorderItem";

export default function ReorderList({ initialItems }: any) {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      {!!items && (
        <Reorder.Group
          values={items}
          onReorder={setItems}
          className="relative flex flex-col gap-4 py-4">
          {items?.map((item: string) => (
            <Item key={item} item={item.toString()} />
          ))}
        </Reorder.Group>
      )}
    </>
  );
}
