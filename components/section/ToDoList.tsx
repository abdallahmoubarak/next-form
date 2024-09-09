import { getToDos } from "@/actions/todos";
import DeleteToDoForm from "./DeleteToDoForm";

export default async function ToDoList() {
  const todos = await getToDos();

  return (
    <>
      {!!todos[0] && (
        <div className="flex flex-col gap-2 border border-emerald-400 rounded-md p-2">
          {todos?.map((todo, i) => (
            <div className="flex items-center justify-between gap-2" key={i}>
              <div>{todo?.text}</div>
              <DeleteToDoForm id={todo?.id?.toString()} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
