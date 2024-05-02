"use client";
import { addUser, removeUsers } from "@/server/users";
import { ActionButton } from "../atom/ActionButton";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function AddUserForm() {
  const ref = useRef<HTMLFormElement>(null);
  const handleAddUser = async (formData: FormData) => {
    if (!!formData.get("username")) {
      const res = await addUser(formData);
      res?.error
        ? toast.error(res?.error)
        : toast.success("User added successfully");

      !res?.error && ref.current?.reset();
    } else {
      toast.error("Add Username");
    }
  };
  const handleRemoveUsers = async () => {
    const res = await removeUsers();
    res?.error
      ? toast.error(res?.error)
      : toast.success("Users removed successfully");

    !res?.error && ref.current?.reset();
  };

  return (
    <form ref={ref} className="flex flex-wrap p-2 gap-4" action={handleAddUser}>
      <input
        className="border border-gray-300 rounded-md flex-1 py-2 px-3"
        type="text"
        name="username"
        placeholder="User Name"
      />
      <div className="flex gap-4">
        <ActionButton
          isPrimary={true}
          text="Add User"
          loadingText="Loading.."
        />
        <ActionButton
          text={"reset"}
          loadingText="Loading.."
          formAction={handleRemoveUsers}
        />
      </div>
    </form>
  );
}
