"use server";
import User from "@/models/user";

export default async function getUserByEmail({ email }: { email: string }) {
  "use server";
  const user = await User.findOne({ email });
  return user;
}
