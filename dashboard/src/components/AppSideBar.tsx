import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar className="w-[15%] m-0">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Kanedos</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {[" ", "Plasticos", "Metalicos"].map((item, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <a href={`/${item}`}>
                          <span>{item}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      )
}
