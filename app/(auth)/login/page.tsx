import LoginForm from "@/components/section/LogInForm";
import SignUpForm from "@/components/section/SignUpForm";

export default function LoginPage({
  searchParams: { signup, err },
}: {
  searchParams: { signup: string; err: string };
}) {
  return signup === "true" ? <SignUpForm err={err} /> : <LoginForm err={err} />;
}
