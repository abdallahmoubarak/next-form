import { getUsers } from "@/server/users";
import DeleteUserForm from "./DeleteUserForm";

export default async function UserList() {
  const users = await getUsers();

  return (
    <>
      {!!users[0] && (
        <div className="flex flex-col gap-2 border border-emerald-400 rounded-md p-2">
          {users?.map((user, i) => (
            <div className="flex items-center justify-between gap-2" key={i}>
              <div>{user?.name}</div>
              <DeleteUserForm id={user?.id?.toString()} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
