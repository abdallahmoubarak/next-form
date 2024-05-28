"use server";
import { signIn } from "@/auth";

export const handleLogIn = async (formData: FormData) => {
  "use server";
  await signIn("credentials", formData);
};
