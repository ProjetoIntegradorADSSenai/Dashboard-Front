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
import { ChartLine, Recycle, Cog, Globe, Users, LogOutIcon, Trash } from "lucide-react"

const navItems = [
  { name: "Dashboard", url: "/", icon: ChartLine },
  { name: "Plásticos", url: "/Plasticos", icon: Recycle },
  { name: "Metálicos", url: "/Metalicos", icon: Cog },
  { name: "Lixo", url: "/Lixo", icon: Trash },
  { name: "Tecnologias", url: "/pages/tecnologias", icon: Globe },
  { name: "Membros", url: "/pages/membros", icon: Users },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" >
      <SidebarContent className="h-full flex flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupLabel>Projeto Integrador</SidebarGroupLabel>
          <SidebarGroupContent className="flex-1">
            <SidebarMenu>
              {navItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild tooltip={item.name}>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span className="data-[collapsed=true]:hidden"> {item.name} </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Sair">
                  <LogoutButton className="flex items-center gap-2 w-full text-red-500">
                    <LogOutIcon />
                    <span className="data-[collapsed=true]:hidden">Sair</span>
                  </LogoutButton>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}

