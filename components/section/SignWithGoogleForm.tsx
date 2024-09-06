import { auth, signIn } from "@/auth";
import Button from "../atom/Button";
import { redirect } from "next/navigation";

export default async function SignWithGoogleForm() {
  const session = await auth();

  !!session && redirect("/");

  return (
    <form className="py-4">
      <div className="text-center p-4">or</div>
      <Button
        text={"Continue with Google"}
        formAction={async () => {
          "use server";
          await signIn("google");
        }}
      />
    </form>
  );
}
