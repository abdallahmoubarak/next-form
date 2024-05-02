import AddUserForm from "@/components/section/AddUserForm";
import UserList from "@/components/section/UserList";

export default async function Home() {
  return (
    <div className="max-w-md mx-auto p-2">
      <UserList />
      <AddUserForm />
    </div>
  );
}
