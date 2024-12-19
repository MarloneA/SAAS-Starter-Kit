import Link from "next/link";
import {
  Database,
  Home,
  LayoutDashboardIcon,
  Mail,
  Package,
  Radio,
  Settings,
  Sheet,
  ShoppingCart,
  Users2,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/_ui/primitives/tooltip";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import TeamSwitcher from "@/components/templates/analytics/team-switcher";
import { Search } from "@/components/templates/analytics/search";
import { UserNav } from "@/components/templates/analytics/user-nav";
import { CalendarDateRangePicker } from "@/components/templates/analytics/date-range-picker";
import { MainNav } from "@/components/templates/analytics/main-nav";

type Props = {
  children: React.ReactNode;
};

const navItems = [
  { href: "/dashboard", icon: LayoutDashboardIcon, label: "Dashboard" },
  { href: "/mail", icon: Mail, label: "Email Client" },
  { href: "/canvas", icon: Sheet, label: "Canvas" },
  { href: "/messenger", icon: ChatBubbleIcon, label: "Chat" },
  { href: "/entity", icon: Database, label: "Entity Builder" },
];

const OwnerLayout = async ({ children }: Props) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const renderNavItem = (
    href: string,
    Icon: React.ElementType,
    label: string
  ) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className="flex justify-center items-center rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon className="w-5 h-5" />
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );

  return (
    <div className="flex flex-col pl-20 md:pl-4 w-full h-full">
      <div className="flex flex-col bg-muted/40 w-full min-h-screen">
        <aside className="left-0 z-10 fixed inset-y-0 sm:flex flex-col hidden bg-background border-r w-14">
          <TooltipProvider>
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
              <Link
                href="/"
                className="flex justify-center items-center gap-2 bg-primary rounded-full w-9 md:w-8 h-9 md:h-8 font-semibold text-lg text-primary-foreground md:text-base group shrink-0"
              >
                <Radio className="group-hover:scale-110 w-4 h-4 transition-all" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              {navItems.map(({ href, icon, label }) =>
                renderNavItem(href, icon, label)
              )}
            </nav>
            <nav className="flex flex-col items-center gap-4 mt-auto px-2 sm:py-5">
              {renderNavItem("/settings", Settings, "Settings")}
            </nav>
          </TooltipProvider>
        </aside>
        <main className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 max-w-[1440px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default OwnerLayout;
