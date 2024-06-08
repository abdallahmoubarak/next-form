"use client";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { ReorderIcon } from "./Icon";

export const SortableList = ({ initialList }: any) => {
  const [list, setList] = useState(initialList);

  return (
    <ReactSortable
      list={list}
      setList={setList}
      className="relative flex flex-col gap-4 py-4">
      {list?.map((item: string) => (
        <div
          key={item}
          className="relative bg-slate-100 border border-slate-300 rounded-md flex">
          <span className="w-12 cursor-move p-3">
            <ReorderIcon />
          </span>
          <span className="p-4">{item}</span>
        </div>
      ))}
    </ReactSortable>
  );
};
