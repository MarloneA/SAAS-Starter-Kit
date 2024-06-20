import { cookies } from "next/headers";

import { Mail } from "./mail";
import { accounts, mails } from "@/constants/mail";

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout?.value) : undefined;
  const defaultCollapsed = collapsed
    ? collapsed?.value !== "undefined" && JSON.parse(collapsed?.value)
    : undefined;

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="top-0 z-30 sm:static sticky flex items-center gap-4 sm:border-0 bg-background sm:bg-transparent px-4 sm:px-6 border-b h-14 sm:h-auto"></header>
      <main className="sm:px-6 sm:py-0 p-4">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </main>
    </div>
  );
}
