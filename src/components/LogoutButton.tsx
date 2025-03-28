"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function LoginButton() {
    return (
        <Button variant="outline" className="rounded-xl px-5 text-red-500" onClick={() => signOut({callbackUrl: "/"})}>
            Sair
        </Button>
    )
}