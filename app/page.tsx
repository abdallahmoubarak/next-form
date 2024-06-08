import { auth } from "@/auth";
import AddToDoForm from "@/components/section/AddToDoForm";
import TopBar from "@/components/section/TopBar";
import ToDoList from "@/components/section/ToDoList";
import { SessionProvider } from "next-auth/react";
import { SortableList } from "@/components/section/SortableList";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <SessionProvider>
      <div className="max-w-md mx-auto p-2">
        <TopBar session={session} />
        <ToDoList />
        <AddToDoForm />
        <SortableList initialList={initialItems} />
      </div>
    </SessionProvider>
  );
}

export const initialItems = [
  <Link href={"/Tomato"} className="bg-red">
    🍅 Tomato
  </Link>,
  <Link href={"/Cucumber"} className="bg-red">
    🥒 Cucumber
  </Link>,
  <Link href={"/Cheese"} className="bg-red">
    🧀 Cheese
  </Link>,
  <Link href={"/Lettuce"} className="bg-red">
    🥬 Lettuce
  </Link>,
];
