"use server";
import { v4 as uuidv4 } from "uuid";

import { revalidatePath } from "next/cache";

let users: any[] = [];

export async function getUsers() {
  return users;
}

export async function addUser(formdata: FormData) {
  try {
    users.push({ id: uuidv4(), name: formdata.get("username") });
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
}

export async function deleteUser({ id }: { id: string }) {
  try {
    users = users.filter((user) => user.id !== id);
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
}

export async function removeUsers() {
  try {
    users = [];
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
}
