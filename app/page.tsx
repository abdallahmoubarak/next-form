import { auth } from "@/auth";
import AddToDoForm from "@/components/section/AddToDoForm";
import TopBar from "@/components/section/TopBar";
import ToDoList from "@/components/section/ToDoList";
import { SessionProvider } from "next-auth/react";
import { SortableList } from "@/components/section/SortableList";

export default async function Home() {
  const session = await auth();

  return (
    <SessionProvider>
      <div className="max-w-md mx-auto p-2">
        <TopBar session={session} />
        <ToDoList />
        <AddToDoForm />
        <SortableList />
      </div>
    </SessionProvider>
  );
}
