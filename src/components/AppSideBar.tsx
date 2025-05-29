import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarTrigger 
} from "@/components/ui/sidebar"
import LogoutButton from "./LogoutButton"

const navItems = [
  { name: "Dashboard", url: "/" },
  { name: "Plásticos", url: "/Plasticos" },
  { name: "Metálicos", url: "/Metalicos" },
  { name: "Membros", url: "/pages/membros" },
  { name: "Tecnologias", url: "/pages/tecnologias" },
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