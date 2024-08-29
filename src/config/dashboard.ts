import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Posts",
      href: "/content",
      icon: "post",
    },
    {
      title: "Guides",
      href: "/content/guides",
      icon: "billing",
    },
    {
      title: "Documentation",
      href: "/content/docs",
      icon: "settings",
    },
  ],
}
