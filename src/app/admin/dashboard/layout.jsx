import AdminSidebar from '@/components/admin/AdminSidebar'

import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import ToggleLocal from '@/components/ui/ToggleLocal';
import AdminBreadcrumbs from '@/components/admin/AdminBreadcrumbs';

export default function AdminDashboardLayout({ children }) {

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-2 ">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <AdminBreadcrumbs />
          </div>
          <div className='flex items-center gap-4'>
            <ToggleLocal />
            <ThemeSwitch />

          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {children}
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
