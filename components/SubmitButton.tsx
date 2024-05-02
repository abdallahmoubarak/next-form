"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${
        pending ? "bg-gray-300" : "bg-green-600"
      } rounded-md text-white py-2 px-4`}
      type="submit"
      disabled={pending}>
      {children}
    </button>
  );
}
