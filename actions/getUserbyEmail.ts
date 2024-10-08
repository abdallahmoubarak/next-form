"use server";
import User from "@/models/user";

export default async function ({ email }: { email: string }) {
  const user = await User.findOne({ email });
  return user;
}
