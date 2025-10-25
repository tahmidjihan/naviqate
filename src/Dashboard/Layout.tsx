import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/Components/app-sidebar';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='px-10 w-full'>
        <div className='block lg:hidden'>
          <SidebarTrigger />
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
