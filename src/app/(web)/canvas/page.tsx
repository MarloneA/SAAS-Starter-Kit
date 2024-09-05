import { LeftControls } from "@/components/templates/webcanvas/controls/leftcontrols";
import { MainCanvas } from "@/components/templates/webcanvas/controls/maincanvas";
import { RightControls } from "@/components/templates/webcanvas/controls/righcontrols";

export default function WebPreviewPage() {
  return (
    <div className="flex h-screen">
      <LeftControls />
      <MainCanvas />
      <RightControls />
    </div>
  );
}
