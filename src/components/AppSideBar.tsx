import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import LogoutButton from "./LogoutButton"

const navItens = [{
  name : "Dashboard",
  url : "/"
},
{
  name : "Plasticos",
  url : "/Plasticos"
},
{
  name : "Metalicos",
  url : "/Metalicos"
},
]

export function AppSidebar() {
    return (
        <Sidebar className="w-[15%] m-0">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Kanedos</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItens.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <a href={ `${item.url}`}>
                          <span>{item.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <LogoutButton />
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      )
}
