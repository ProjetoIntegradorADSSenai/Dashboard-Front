
import LoginButton from "@/components/LoginButton";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { getSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Page(){
    const session = await getServerSession();

    if (session?.user)
        return redirect("/");
    return (
        <div className="items-center flex flex-col justify-center w-screen h-screen gap-3">
            <p className="text-6xl font-bold">Bem vindo!</p>
            <p className="text-2xl pb-7">Faça login para continuar</p>
            <LoginButton />
        </div>
        )
}