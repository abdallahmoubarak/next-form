import Button from "@/components/atom/Button";
import Input from "@/components/atom/Input";
import SignWithGoogleForm from "./SignWithGoogleForm";
import { handleSignUp } from "@/server/auth";
import Link from "next/link";

export default async function SignUpForm() {
  return (
    <div className="w-full border border-gray-200 shadow-lg py-8 px-4 rounded-xl translate-y-12">
      <form className="flex flex-col gap-4" action={handleSignUp}>
        <h1 className="text-4xl text-primary not-italic font-bold leading-normal">
          Sign Up
        </h1>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <Input placeholder="Full Name" name="name" />

            <Input placeholder="Email Address" name="email" />
            <Input
              placeholder="Password"
              inputType="password"
              name="password"
            />
          </div>
          <div>
            <Button isPrimary text={"Sign Up"} />
          </div>
        </div>
        <div>
          <span className="text-sm">You have an account? </span>
          <Link href={"/login?signup=false"} className="underline">
            Login
          </Link>
        </div>
      </form>
      <SignWithGoogleForm />
    </div>
  );
}
