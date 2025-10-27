import { type Icon } from '@tabler/icons-react';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link, useLocation } from 'react-router';

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  const location = useLocation().pathname;
  return (
    <SidebarGroup>
      <SidebarGroupContent className='flex flex-col gap-2 border-t-2 border-cyan-600 pt-5'>
        <SidebarMenu>
          {items.map((item) => (
            <Link to={item.url}>
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={location === item.url /*  */}
                  tooltip={item.title}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
