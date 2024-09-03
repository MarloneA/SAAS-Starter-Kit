import { docsConfig } from "@/config/docs";
import { DocsSidebarNav } from "@/components/widgets/sidebar-nav";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex-1 md:gap-6 lg:gap-10 md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
      <aside className="md:block top-14 z-30 fixed md:sticky hidden py-6 lg:py-10 pr-2 border-r w-full h-[calc(100vh-3.5rem)] overflow-y-auto shrink-0">
        <DocsSidebarNav items={docsConfig.sidebarNav} />
      </aside>
      {children}
    </div>
  );
}
