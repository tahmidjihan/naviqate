import {
  Calendar,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link, useLocation } from 'react-router';
import Logo from './logo';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/Dashboard',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '/Dashboard/Inbox',
    icon: Inbox,
  },
  {
    title: 'Blogs',
    url: '/Dashboard/Blogs',
    icon: Calendar,
  },
  {
    title: 'Naviq',
    url: '/Dashboard/Naviq',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '/Dashboard/Settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const currentRoute = useLocation().pathname;
  return (
    <Sidebar className='shadow-xl shadow-cyan-600 border-r-white'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='py-10 pb-20'>
            <Link to='/'>
              <Logo className='h-[50px] min-w-[200px] px-2' />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={currentRoute === item.url}
                    asChild
                    tooltip={item.title}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side='top'
                className='w-[--radix-popper-anchor-width]'
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
