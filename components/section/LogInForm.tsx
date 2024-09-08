import Button from "@/components/atom/Button";
import Input from "@/components/atom/Input";
import SignWithGoogleForm from "./SignWithGoogleForm";
import { handleLogIn } from "@/server/auth";
import Link from "next/link";

export default async function LoginForm() {
  return (
    <div className="w-full border border-gray-200 shadow-lg py-8 px-4 rounded-xl translate-y-12">
      <form className="flex flex-col gap-4" action={handleLogIn}>
        <h1 className="text-4xl text-primary not-italic font-bold leading-normal">
          Log In
        </h1>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <Input placeholder="Email Address" name="email" />
            <Input
              placeholder="Password"
              inputType="password"
              name="password"
            />
          </div>
          <div>
            {/* <div className={`text-sm pl-2 text-red-500 font-bold`}>{msg}</div> */}
            <Button isPrimary text={"Log In"} />
          </div>
        </div>
        <div>
          <span className="text-sm">You Don&apos;t have an account?</span>{" "}
          <Link href={"/login?signup=true"} className="underline">
            Register
          </Link>
        </div>
      </form>
      <SignWithGoogleForm />
    </div>
  );
}
