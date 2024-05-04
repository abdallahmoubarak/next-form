"use server";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

let todos: any[] = [];

export async function getToDos() {
  const session = await auth();

  if (!session?.user?.email) return [];
  return todos;
}

export async function addToDo(formdata: FormData) {
  const session = await auth();

  if (!session?.user?.email) return { error: "Sign in first" };
  try {
    todos.push({ id: uuidv4(), text: formdata.get("todo") });
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
}

export async function deleteToDo({ id }: { id: string }) {
  try {
    todos = todos.filter((todo) => todo.id !== id);
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
}

export async function removeToDos() {
  const session = await auth();
  if (!session?.user?.email) return { error: "Sign in first" };

  try {
    todos = [];
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
}
