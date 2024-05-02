"use server";
import { v4 as uuidv4 } from "uuid";

import { revalidatePath } from "next/cache";

let todos: any[] = [];

export async function getToDos() {
  return todos;
}

export async function addToDo(formdata: FormData) {
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
