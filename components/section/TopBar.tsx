import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { ActionButton } from "../atom/ActionButton";
import { signOut } from "@/auth";

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
              loadingText={"signing out.."}
              formAction={async () => {
                "use server";
                await signOut();
              }}
            />
          </div>
        </form>
      ) : (
        <Link href={"/api/auth/signin"}>
          <ActionButton
            text="Sign in"
            isPrimary={true}
            loadingText="Signing.."
          />
        </Link>
      )}
    </div>
  );
}
