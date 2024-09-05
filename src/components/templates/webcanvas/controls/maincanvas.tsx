import { DrawTools } from "../widgets/DrawTools";
import DrawRegion from "../widgets/DrawRegion";

export function MainCanvas() {
  return (
    <div className="flex h-screen flex-1 flex-col">
      <DrawTools />
      <DrawRegion />
    </div>
  );
}



