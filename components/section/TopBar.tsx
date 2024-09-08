import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import ActionButton from "@/components/atom/ActionButton";
import { signOut } from "@/auth";
import Button from "../atom/Button";

export default function TopBar({ session }: { session: Session | null }) {
  return (
    <div className="py-2">
      {session?.user ? (
        <form>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {session?.user?.name && session?.user?.image && (
                <Image
                  className="rounded-full"
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  width={60}
                  height={60}
                />
              )}
              <div className="text-nowrap">
                <div className="text-xl font-bold"> {session?.user?.name}</div>
                <div className="text-xs"> {session?.user?.email}</div>
              </div>
            </div>
            <ActionButton
              text={"Sign Out"}
              loadingText={"Signing out.."}
              formAction={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            />
          </div>
        </form>
      ) : (
        // <form>
        //   <ActionButton
        //     text="Sign In"
        //     isPrimary={true}
        //     loadingText="Signing.."
        //     formAction={async () => {
        //       "use server";
        //       await signIn();
        //     }}
        //   />
        // </form>
        <form>
          <Link href={"/login"} prefetch>
            <Button isPrimary text="Log In" isLinked />
          </Link>
        </form>
      )}
    </div>
  );
}
