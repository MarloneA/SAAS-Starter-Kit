import Link from "next/link";

import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/_ui/primitives/button";
import { MainNav } from "@/components/widgets/main-nav";
import Footer from "@/components/templates/footer";
import { auth } from "@/auth";
import { UserNav } from "@/components/templates/analytics/user-nav";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const session = await auth();

  if (session) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="z-40 bg-background container">
          <div className="flex justify-between items-center py-6 h-20">
            <MainNav items={marketingConfig.mainNav} />
            <nav className="flex items-center gap-2">
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
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
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
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
