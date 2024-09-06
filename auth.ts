import NextAuth from "next-auth";
import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/user";
import { signInSchema } from "./utils/zod";
import bcrypt from "bcryptjs";
import { connectDB } from "./utils/mongodb";
import GoogleProvider from "next-auth/providers/google";

const providers: Provider[] = [
  GoogleProvider,
  Credentials({
    authorize: async (credentials) => {
      connectDB();
      let user = null;
      try {
        const { email, password } = await signInSchema.parseAsync(credentials);
        user = await User.findOne({ email });
        console.log(user);
        if (!user) throw new Error("Wrong Email");

        const passwordsMatch = await bcrypt.compare(password, user?.password);
        if (passwordsMatch) return user;
      } catch (err: any) {
        throw new Error(err.message);
      }
      return user;
    },
  }),
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  pages: { signIn: "/login" },
  providers,
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
});
