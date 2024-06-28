import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/_ui/button";
import React, { Children } from "react";
import { H4 } from "@/components/_ui/typography";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex-col justify-center items-center hidden md:grid lg:grid-cols-2 lg:px-0 lg:max-w-none h-screen container">
      {/* <Link
        href="/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link> */}
      <div className="relative lg:flex flex-col hidden bg-muted p-10 dark:border-r h-full text-white">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center font-medium text-lg">
          <Link href="/">
            <H4 className="font-black">
              SAAS <span className="text-red-700">KIT</span>
            </H4>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="flex flex-col justify-center space-y-6 mx-auto w-full sm:w-[350px]">
          {children}
        </div>
      </div>
    </div>
  );
}
