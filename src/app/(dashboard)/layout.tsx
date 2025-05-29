import { AppSidebar } from "@/components/AppSideBar"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

type Props = { children: React.ReactNode }

export default async function Layout({ children }: Props) {
  const session = await getServerSession()

  if (!session?.user) return redirect("/auth/signin")

  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        {session.user && (
          <>
            <div className="hidden md:flex">
              <SidebarTrigger className="fixed left-2 top-2 z-50" />
              <AppSidebar />
            </div>
            <SidebarInset className="flex-1 overflow-auto">
              {children}
            </SidebarInset>
          </>
        )}
      </SidebarProvider>
    </div>
  )
}