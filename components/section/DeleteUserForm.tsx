"use client";
import { deleteUser } from "@/server/users";
import { ActionButton } from "../atom/ActionButton";
import toast from "react-hot-toast";

export default function DeleteUserForm({ id }: { id: string }) {
  const handleDeleteUser = async () => {
    const res = await deleteUser({ id });
    res?.error
      ? toast.error(res?.error)
      : toast.success("User deleted successfully");
  };
  return (
    <form>
      <ActionButton
        text="Delete"
        loadingText="Loading.."
        formAction={handleDeleteUser}
      />
    </form>
  );
}
