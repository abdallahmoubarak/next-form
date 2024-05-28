"use client";
import React from "react";
import LoadingDots from "./svg/LoadingDots";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isPrimary?: boolean;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  formAction?: any;
}

export default function Button({
  text,
  onClick,
  icon,
  isPrimary,
  isDisabled,
  formAction,
}: ButtonProps) {
  const { pending: isLoading } = useFormStatus();
  return (
    <button
      onClick={onClick}
      type="submit"
      formAction={formAction}
      disabled={isLoading}
      className={`py-3 px-10 mx-auto rounded-lg h-12 w-full border transition-all duration-200 ease-in-out  text-base not-italic font-bold leading-normal ${
        isDisabled
          ? "text-white bg-gray-400 border-gray-400 hover:bg-gray-400 cursor-not-allowed"
          : isLoading
          ? " bg-primary hover:bg-primary cursor-wait"
          : isPrimary
          ? " text-white bg-primary hover:bg-light_primary"
          : "bg-white text-primary border border-primary hover:bg-light_secondary "
      }`}>
      {isLoading ? (
        <div className="w-6 h-6 mx-auto flex justify-center items-center">
          <LoadingDots />
        </div>
      ) : (
        <div className="flex gap-2 items-center justify-center whitespace-nowrap">
          {icon && <div>{icon}</div>}
          <div>{text}</div>
        </div>
      )}
    </button>
  );
}
