"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/_ui/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/_ui/primitives/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Changelog",
    href: "/changelog",
    description:
      "Stay updated with the latest improvements, features, and fixes.",
  },
  {
    title: "Showcase",
    href: "/showcase",
    description:
      "Discover our portfolio of innovative projects built with this kit.",
  },
  {
    title: "Roadmap",
    href: "/roadmap",
    description:
      "Take a sneek peek into what's coming next in our future release cycles.",
  },
  {
    title: "Templates",
    href: "/docs",
    description:
      "Visually appealing templates that can be used on top of our kit.",
  },
  {
    title: "Deployment",
    href: "/docs",
    description:
      "Ready to deploy your app check out the guidelines for best practices.",
  },
  {
    title: "Components",
    href: "/docs",
    description:
      "Explore the wide range of components that are available in our kit.",
  },
];

export function NavMenuMore() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap-3 grid lg:grid-cols-[.75fr_1fr] p-4 md:w-[400px] lg:w-[500px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-col justify-end bg-gradient-to-b from-muted/50 to-muted focus:shadow-md p-6 rounded-md w-full h-full no-underline select-none outline-none"
                    href="/"
                  >
                    <Icons.logo className="w-6 h-6" />
                    <div className="mt-4 mb-2 font-medium text-lg">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-medium text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
