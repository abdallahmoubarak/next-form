"use server";
import { signIn } from "@/auth";
import User from "@/models/user";
import { hashPassword } from "@/utils/jwt";
import { connectDB } from "@/utils/mongodb";
import { signUpSchema } from "@/utils/zod";

export const handleLogIn = async (formData: FormData) => {
  "use server";
  try {
    await signIn("credentials", formData);
  } catch (err: any) {
    console.log(err.message);
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
    console.log({ name, email, hashedPassword });
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
    }
    console.log(user);
  } catch (err: any) {
    console.log(err.message);
  }
};
