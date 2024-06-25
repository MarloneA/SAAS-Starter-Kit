import * as Layout from "@/components/_ui/layout";
import { Hero, HeroMain } from "@/components/cta-landingpage";
import { Pricing } from "@/components/pricing";
import FAQ from "@/components/faq";
import Feature from "@/components/features";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { MainNav } from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";
import { buttonVariants } from "@/components/_ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default async function Home() {
  return (
    <Layout.Main>
      {/* <NavBar /> */}
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

      <HeroMain />
      <Feature />
      <Pricing />
      <FAQ />
      <Hero />
      <Footer />
    </Layout.Main>
  );
}
