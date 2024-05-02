"use server";

import { revalidatePath } from "next/cache";

let users: any[] = [];

export async function getUsers() {
  return users;
}

export async function addUser(formdata: FormData) {
  try {
    users.push(formdata.get("username"));
    revalidatePath("/");
  } catch (e) {
    console.log(e);
  }
}

export async function removeUsers() {
  try {
    users = [];
    revalidatePath("/");
  } catch (e) {
    console.log(e);
  }
}
