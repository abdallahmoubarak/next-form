import type { NextAuthConfig } from "next-auth";
import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/user";
import { signInSchema } from "./utils/zod";
import bcrypt from "bcryptjs";
import { connectDB } from "./utils/mongodb";
import GoogleProvider from "next-auth/providers/google";
import { z } from "zod";

const providers: Provider[] = [
  GoogleProvider,
  Credentials({
    authorize: async (credentials) => {
      typeof window === "undefined" && connectDB();
      let user = null;
      try {
        const { email, password } = await signInSchema.parseAsync(credentials);
        user = await User.findOne({ email });
        console.log(user);
        if (!user) throw new Error("Wrong Email or Password");

        const passwordsMatch = await bcrypt.compare(password, user?.password);
        if (!passwordsMatch) throw new Error("Wrong Email or Password");
        return user;
      } catch (err: any) {
        if (err instanceof z.ZodError) {
          const validationErrors = err.issues.map(
            (issue: { message: any }) => issue.message
          );
          throw new Error(validationErrors[0]);
        }
        throw new Error(err.message);
      }
    },
  }),
];

export default {
  secret: process.env.AUTH_SECRET,
  providers,
} satisfies NextAuthConfig;
