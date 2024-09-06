import LoginForm from "@/components/section/LogInForm";
import SignUpForm from "@/components/section/SignUpForm";

export default function LoginPage({
  searchParams: { signup },
}: {
  searchParams: { signup: string };
}) {
  return signup === "true" ? <SignUpForm /> : <LoginForm />;
}
