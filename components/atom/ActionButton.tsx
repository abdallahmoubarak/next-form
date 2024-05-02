"use client";

import { useFormStatus } from "react-dom";

export function ActionButton({
  text,
  loadingText,
  formAction,
  isPrimary,
}: {
  text: string;
  loadingText: string;
  formAction?: any;
  isPrimary?: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${
        pending ? "bg-gray-300" : isPrimary ? "bg-green-600" : "bg-red-600"
      } rounded-md text-white py-2 px-4`}
      type="submit"
      formAction={formAction}
      disabled={pending}>
      {pending ? loadingText : text}
    </button>
  );
}
