import * as React from "react";
import { Reorder, useDragControls } from "framer-motion";
import { ReorderIcon } from "./Icon";

interface Props {
  item: string;
}

export const Item = ({ item }: Props) => {
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      id={item}
      dragListener={false}
      dragControls={dragControls}
      className="relative bg-slate-100 border border-slate-300 rounded-md flex gap-4 p-4">
      <span className="w-6">
        <ReorderIcon dragControls={dragControls} />
      </span>
      <span>{item}</span>
    </Reorder.Item>
  );
};
