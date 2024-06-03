import { auth } from "@/auth";
import AddToDoForm from "@/components/section/AddToDoForm";
import TopBar from "@/components/section/TopBar";
import ToDoList from "@/components/section/ToDoList";
import { SessionProvider } from "next-auth/react";
import ReorderList from "@/components/section/ReorderList";

export default async function Home() {
  const session = await auth();

  return (
    <SessionProvider>
      <div className="max-w-md mx-auto p-2">
        <TopBar session={session} />
        <ToDoList />
        <AddToDoForm />
        {!!session && <ReorderList />}
      </div>
    </SessionProvider>
  );
}
