import { docsConfig } from "@/config/docs";
import { MainNav } from "@/components/main-nav";
import { DocsSearch } from "@/components/search";
import { DocsSidebarNav } from "@/components/sidebar-nav";
import Footer from "@/components/footer";
import { UserNav } from "@/components/analytics/user-nav";

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
            <UserNav />
          </div>
        </div>
      </header>
      <div className="flex-1 container">{children}</div>
      <Footer />
    </div>
  );
}
