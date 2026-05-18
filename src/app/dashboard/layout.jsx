import { AppSidebar } from '@/components/app-sidebar'
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import ToggleLocal from '@/components/ui/ToggleLocal';
import UserBreadcrumbs from '@/components/dashboard/UserBreadcrumbs';

export default function UserDashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-2 ">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <UserBreadcrumbs />
          </div>
          <div className='flex items-center gap-4'>
            <ToggleLocal />
            <ThemeSwitch />

          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 ov">
        {children}
  
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
