import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  pages: { signIn: "/login" },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  ...authConfig,
});
