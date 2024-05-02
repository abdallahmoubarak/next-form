"use client";
import { deleteToDo } from "@/server/todos";
import { ActionButton } from "../atom/ActionButton";
import toast from "react-hot-toast";

export default function DeleteToDoForm({ id }: { id: string }) {
  const handleDeleteToDo = async () => {
    const res = await deleteToDo({ id });
    res?.error
      ? toast.error(res?.error)
      : toast.success("ToDo deleted successfully");
  };
  return (
    <form>
      <ActionButton
        text="Delete"
        loadingText="Loading.."
        formAction={handleDeleteToDo}
      />
    </form>
  );
}
