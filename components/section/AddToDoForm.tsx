"use client";
import { addToDo, removeToDos } from "@/actions/todos";
import ActionButton from "@/components/atom/ActionButton";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function AddToDoForm() {
  const ref = useRef<HTMLFormElement>(null);
  const handleAddToDo = async (formData: FormData) => {
    if (!!formData.get("todo")) {
      const res = await addToDo(formData);
      res?.error
        ? toast.error(res?.error)
        : toast.success("ToDo added successfully");

      !res?.error && ref.current?.reset();
    } else {
      toast.error("Add ToDo");
    }
  };
  const handleRemoveToDos = async () => {
    const res = await removeToDos();
    res?.error
      ? toast.error(res?.error)
      : toast.success("ToDos removed successfully");

    !res?.error && ref.current?.reset();
  };

  return (
    <form ref={ref} className="flex flex-wrap py-2 gap-4">
      <input
        className="border border-gray-300 rounded-md flex-1 py-2 px-3"
        type="text"
        name="todo"
        placeholder="To Do"
      />
      <div className="flex gap-4">
        <ActionButton
          isPrimary={true}
          text="Add Todo"
          formAction={handleAddToDo}
          loadingText="Loading.."
        />
        <ActionButton
          text={"reset"}
          loadingText="Loading.."
          formAction={handleRemoveToDos}
        />
      </div>
    </form>
  );
}
