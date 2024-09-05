import * as React from "react";
import { auth } from "@/auth";
import { buttonVariants } from "@/components/_ui/primitives/button";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/widgets/main-nav";
import { marketingConfig } from "@/config/marketing";
import { UserNav } from "@/components/templates/analytics/user-nav";
import Link from "next/link";

async function Header() {
  const session = await auth();

  if (session) {
    return (
      <header className="z-40 bg-background container">
        <div className="flex justify-between items-center py-6 h-20">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex gap-2 items-center">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Go to Dashboard
            </Link>
            <UserNav />
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="z-40 bg-background container">
      <div className="flex justify-between items-center py-6 h-20">
        <MainNav items={marketingConfig.mainNav} />
        <nav>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "px-4"
            )}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
