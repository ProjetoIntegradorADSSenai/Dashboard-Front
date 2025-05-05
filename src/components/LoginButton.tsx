"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function LoginButton() {
  return (
    <Button className="rounded-full p-6" onClick={() => signIn("github", { callbackUrl: "/" })}>
      Entrar com o GitHub
    </Button>
  )
}
