import Link from "next/link";

import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { DocsSearch } from "@/components/search";
import { DocsSidebarNav } from "@/components/sidebar-nav";
import Footer from "@/components/footer";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="top-0 z-40 sticky bg-background border-b w-full">
        <div className="flex sm:justify-between items-center space-x-4 sm:space-x-0 h-16 container">
          <MainNav items={docsConfig.mainNav}>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 sm:justify-end items-center space-x-4">
            <div className="flex-1 sm:grow-0">
              <DocsSearch />
            </div>
            <nav className="flex space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="w-7 h-7" />
                <span className="sr-only">GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex-1 container">{children}</div>
      <Footer />
    </div>
  );
}
