import { NextAuthConfig } from "next-auth";
import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./utils/zod";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import { z } from "zod";
import User from "./models/user";

const providers: Provider[] = [
  GoogleProvider,
  Credentials({
    authorize: async (credentials) => {
      try {
        const { email, password } = await signInSchema.parseAsync(credentials);

        const user = await User.findOne({ email });

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

export default { providers } satisfies NextAuthConfig;
