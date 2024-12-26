import { DashboardConfig } from "@/lib/types";

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
      href: "/content/posts",
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
};
