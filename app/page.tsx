import { SubmitButton } from "@/components/SubmitButton";
import { addUser, getUsers, removeUsers } from "@/server/users";

export default async function Home() {
  const users = await getUsers();
  return (
    <div>
      <div className="p-4">
        {!!users[0] && users.map((user, i) => <div key={i}>{user}</div>)}
      </div>
      <form className="flex p-4 gap-4" action={addUser}>
        <input
          className="border border-red-300 py-2 px-3"
          type="text"
          name="username"
          placeholder="User Name"
        />
        <SubmitButton>add User</SubmitButton>
        <button
          className="bg-red-600 rounded-md text-white py-2 px-4"
          formAction={removeUsers}>
          reset
        </button>
      </form>
    </div>
  );
}
