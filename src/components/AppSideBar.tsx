import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import LogoutButton from "./LogoutButton"

const navItens = [{
  name: "Dashboard",
  url: "/"
},
{
  name: "Plásticos",
  url: "/Plasticos"
},
{
  name: "Metálicos",
  url: "/Metalicos"
},
{
  name: "Membros",
  url: "/pages/membros"
},
]

export function AppSidebar() {
  return (
    <Sidebar className="w-[15%] m-0">
      <SidebarContent className="h-full flex flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupLabel>Kanedos</SidebarGroupLabel>
          <SidebarGroupContent className="flex-1">
            <SidebarMenu>
              {navItens.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <a href={`${item.url}`}>
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="p-4">
          <LogoutButton />
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
 