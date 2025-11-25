"use client"
import { FaBloggerB } from "react-icons/fa";
import { TbMapQuestion } from "react-icons/tb";

import {
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLocale } from "next-intl";

const data = {
  user: {
    name: "Mohamed Sayed",
    email: "m@example.com",
    avatar: "https://res.cloudinary.com/diw11kbbx/image/upload/v1761164895/blogs/rsmtbb0hnhc78vphjcwa.png",
  },
  navMain: [
    {
      title: "Blogs",
      url: "/admin/dashboard/blogList",
      icon: FaBloggerB,
      isActive: true,
      items: [
        {
          title: "View All Blogs",
          url: "/admin/dashboard/blogList",
        },
        {
          title: "Add New Blog",
          url: "/admin/dashboard/addBlog",
        },
        {
          title: "Edit Blog",
          url: "/admin/dashboard/editBlog",
        },
        {
          title: "View Categories",
          url: "/admin/dashboard/blogsCategories",
        },
        {
          title: "Blog Subscriptions",
          url: "/admin/dashboard/blogSubscriptions",
        },
      ],
    },
    {
      title: "Interviews",
      url: "/admin/dashboard/interviews",
      icon: TbMapQuestion,
      items: [
        {
          title: "All Categories",
          url: "#",
        },
        
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export default function AdminSidebar({
  ...props
}) {
  const locale = useLocale();
  return (
    <Sidebar variant="inset" {...props} side={locale === "ar" ? "right" : "left"}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
