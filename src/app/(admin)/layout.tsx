import React from "react";

import Link from "next/link";
import {
  Camera,
  Database,
  Home,
  Mail,
  Package,
  Package2,
  Paperclip,
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

type Props = {
  children: React.ReactNode;
};

const OwnerLayout = async ({ children }: Props) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

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
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/dashboard"
                    className="flex justify-center items-center rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/orders"
                    className="flex justify-center items-center active:bg-accent rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground active:text-accent-foreground hover:text-foreground transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span className="sr-only">Orders</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Orders</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/products"
                    className="flex justify-center items-center rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Package className="w-5 h-5" />
                    <span className="sr-only">Products</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Products</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/clients"
                    className="flex justify-center items-center rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Users2 className="w-5 h-5" />
                    <span className="sr-only">Customers</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Customers</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/mail"
                    className="flex justify-center items-center rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email Client</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Email Client</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/canvas"
                    className="flex justify-center items-center rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Sheet className="w-5 h-5" />
                    <span className="sr-only">Canvas</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Canvas</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/chat"
                    className="flex justify-center items-center rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChatBubbleIcon className="w-5 h-5" />
                    <span className="sr-only">Chat</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Chat</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/entity"
                    className="flex justify-center items-center rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Database className="w-5 h-5" />
                    <span className="sr-only">Entity</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Entity Builder</TooltipContent>
              </Tooltip>
            </nav>
            <nav className="flex flex-col items-center gap-4 mt-auto px-2 sm:py-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/settings"
                    className="flex justify-center items-center rounded-lg w-9 md:w-8 h-9 md:h-8 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Settings className="w-5 h-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </nav>
          </TooltipProvider>
        </aside>
        {children}
      </div>
    </div>
  );
};

export default OwnerLayout;
