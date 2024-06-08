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

export interface ItemType {
  id: number;
  name: string;
  link: string;
}

export const initialItems: ItemType[] = [
  {
    id: 1,
    name: "🍅 Tomato",
    link: "/tomato",
  },
  {
    id: 2,
    name: "🥒 Cucumber",
    link: "/cucumber",
  },
  {
    id: 3,
    name: "🧀 Cheese",
    link: "/cheese",
  },
  {
    id: 4,
    name: "🥬 Lettuce",
    link: "/lettuce",
  },
];
