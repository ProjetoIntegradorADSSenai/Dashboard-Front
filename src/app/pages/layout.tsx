import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";


type Props = { children: React.ReactNode };

export default async function Layout({ children }: Props) {
  const session = await getServerSession();

  if (!session?.user)
    return redirect("/auth/signin");

  return (
    <div>
    <SidebarProvider>
    {
    session.user &&(
        <AppSidebar />
    )
    }
      {children}
    </SidebarProvider>
    </div>
  );
}