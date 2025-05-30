"use client";

import { signOut } from "next-auth/react";

type LogoutButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function LogoutButton({ className, children, ...props }: LogoutButtonProps) {
  return (
    <button
      {...props}
      onClick={() => signOut({ callbackUrl: "/" })}
      className={className}
    >
      {children}
    </button>
  );
}

