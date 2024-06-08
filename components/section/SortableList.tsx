"use client";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { ReorderIcon } from "./Icon";
import Link from "next/link";
import { initialItems } from "@/public/initialItems";

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
          <Link href={item?.link} className="p-4">
            {item?.name}
          </Link>
        </div>
      ))}
    </ReactSortable>
  );
};
