"use server";
import { signIn } from "@/auth";
import User from "@/models/user";
import { hashPassword } from "@/utils/jwt";
import { connectDB } from "@/utils/mongodb";
import { signUpSchema } from "@/utils/zod";
import { redirect } from "next/navigation";
import { z } from "zod";

export const handleLogIn = async (formData: FormData) => {
  "use server";
  connectDB();

  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
      redirect: false,
    }).then(() => redirect("/"));
  } catch (err: any) {
    err?.message === "NEXT_REDIRECT" && redirect("/");
    err?.cause?.err?.message
      ? redirect(`/login?err=${err?.cause?.err?.message}`)
      : redirect("/login?err=Unknown Error");
  }
};

export const handleSignUp = async (formData: FormData) => {
  "use server";
  connectDB();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password") || "";

  try {
    await signUpSchema.parseAsync({ name, email, password });
    const hashedPassword = await hashPassword(password.toString());
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      await signIn("credentials", {
        email,
        password,
        redirectTo: "/",
        redirect: false,
      }).then(() => redirect("/"));
    } else {
      throw new Error("You are already registered, try to login instead.");
    }
  } catch (err: any) {
    let msg;
    if (err instanceof z.ZodError) {
      const validationErrors = err.issues.map(
        (issue: { message: any }) => issue.message
      );
      msg = validationErrors[0];
    } else if (err?.cause?.err?.message) {
      msg = err?.cause?.err?.message;
    } else {
      msg = err.message;
    }

    msg === "NEXT_REDIRECT" && redirect("/");
    msg
      ? redirect(`/login?signup=true&err=${msg}`)
      : redirect("/login?signup=true&err=Unknown Error");
  }
};
