"use client";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { ReorderIcon } from "./Icon";
import { initialItems } from "@/public/initialItems";
import Card from "@/components/atom/Card";

export const SortableList = () => {
  const [list, setList] = useState(initialItems);

  return (
    <ReactSortable
      list={list}
      setList={setList}
      className="relative flex flex-col gap-4 py-4"
      animation={200}
      delay={2}>
      {list?.map((item: any) => (
        <div
          key={item?.id}
          className="relative bg-slate-100 border border-slate-300 rounded-md flex">
          <span className="w-12 cursor-move p-3">
            <ReorderIcon />
          </span>
          <Card
            imageUrl={""}
            name={item?.name}
            price={item?.price}
            value={""}
            link={item?.link}
          />
        </div>
      ))}
    </ReactSortable>
  );
};
