import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { Provider } from "next-auth/providers";
import clientPromise from "./lib/db";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

const providers: Provider[] = [
  CredentialProvider({
    name: "Credentials",
    credentials: {
      email: {},
      password: {},
    },
    async authorize(credentials: any) {
      console.log(credentials);
      return {
        name: credentials?.name,
        email: credentials?.email,
        role: credentials?.role,
        id: credentials?.id,
        image: credentials?.image,
      };
    },
  }),
  GoogleProvider,
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers,
});
