import ChatSupport from "@/components/templates/chat/chat-support";
import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Dashboard | messenger",
  description: "Messenger view for customer interactions",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
};

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <main className="flex h-[calc(100dvh)] max-w-[1600px] w-[1600px] m-auto flex-col p-4 md:px-24 py-32 gap-4">
      <div className="flex z-10 border rounded-lg h-full text-sm">
        {/* Page content */}
        {children}
      </div>
      {/* Chat support component */}
      <ChatSupport />
    </main>
  );
}
