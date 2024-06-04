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
      {list.map((item: string) => (
        <div
          key={item}
          className="relative bg-slate-100 border border-slate-300 rounded-md flex gap-4 p-4">
          <span className="w-6">
            <ReorderIcon />
          </span>
          <span>{item}</span>
        </div>
      ))}
    </ReactSortable>
  );
};
