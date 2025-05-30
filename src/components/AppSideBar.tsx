import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import LogoutButton from "./LogoutButton"

import { ChartLine, Recycle, Cog, Globe, Users } from "lucide-react"

const navItems = [
  { name: "Dashboard", url: "/", icon: ChartLine },
  { name: "Plásticos", url: "/Plasticos", icon: Recycle },
  { name: "Metálicos", url: "/Metalicos", icon: Cog },
  { name: "Tecnologias", url: "/pages/tecnologias", icon: Globe },
  { name: "Membros", url: "/pages/membros", icon: Users },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon"> {/* Changed to "icon" mode */}
      <SidebarContent className="h-full flex flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupLabel>Kanedos</SidebarGroupLabel>
          <SidebarGroupContent className="flex-1">
            <SidebarMenu>
              {navItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild tooltip={item.name}>
                    <a href={item.url}>
                      <item.icon />
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
