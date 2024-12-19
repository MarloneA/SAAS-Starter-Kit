import { EnterIcon } from "@radix-ui/react-icons";
import { Navigation2Off, Radio } from "lucide-react";
import { UserNav } from "../../analytics/user-nav";
import File from "@/components/_ui/icons/canvas/file";
import ImageIcon from "@/components/_ui/icons/canvas/image";
import Layout from "@/components/_ui/icons/canvas/layout";
import Link from "next/link";
import Palette from "@/components/_ui/icons/canvas/palette";
import SquarePlus from "@/components/_ui/icons/canvas/square-plus";
import Tooltip from "../widgets/Tooltip";

export function LeftControls() {
  return (
    <aside className="flex flex-col h-screen w-18 items-center border-r bg-background p-2">
      <div className="flex h-18 w-full items-center justify-center border-b">
        <Link
          href="/"
          className="flex justify-center items-center gap-2 bg-primary rounded-full w-9 md:w-8 h-9 md:h-8 font-semibold text-lg text-primary-foreground md:text-base group shrink-0"
        >
          <Radio className="group-hover:scale-110 w-4 h-4 transition-all" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <a
          href="#"
          className="group relative rounded-xl p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <SquarePlus className="h-6 w-6 stroke-current" />
          <Tooltip>
            Add elements <span className="">(A)</span>
          </Tooltip>
        </a>
        <a
          href="#"
          className="group relative rounded-xl p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Layout className="h-6 w-6 stroke-current" />
          <Tooltip>
            Layouts <span className="">(Y)</span>
          </Tooltip>
        </a>
        <a
          href="#"
          className="group relative rounded-xl p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Palette className="h-6 w-6 stroke-current" />
          <Tooltip>
            Themes <span className="">(T)</span>
          </Tooltip>
        </a>
        <a
          href="#"
          className="group relative rounded-xl p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <File className="h-6 w-6 stroke-current" />
          <Tooltip>
            Assets <span className="">(S)</span>
          </Tooltip>
        </a>
        <a
          href="#"
          className="group relative rounded-xl p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ImageIcon className="h-6 w-6 fill-current" />
          <Tooltip>
            Images <span className="">(I)</span>
          </Tooltip>
        </a>
      </nav>
      <div className="flex flex-col items-center gap-y-4 py-10">
        <Link
          href="/dashboard"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <EnterIcon className="h-5 w-5 stroke-current" />
          <Tooltip>
            Back to Dashboard <span className="">(B)</span>
          </Tooltip>
        </Link>
        <UserNav />
      </div>
    </aside>
  );
}
