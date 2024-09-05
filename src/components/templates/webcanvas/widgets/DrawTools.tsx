import ChevronDown from "@/components/_ui/icons/canvas/chevron-down";
import ChevronLeft from "@/components/_ui/icons/canvas/chevron-left";
import DeviceDesktop from "@/components/_ui/icons/canvas/device-desktop";
import DeviceMobile from "@/components/_ui/icons/canvas/device-mobile";
import DeviceMobileRotated from "@/components/_ui/icons/canvas/device-mobile-rotated";
import DeviceTablet from "@/components/_ui/icons/canvas/device-tablet";
import Eye from "@/components/_ui/icons/canvas/eye";
import Package from "@/components/_ui/icons/canvas/package";

export function DrawTools() {
  return (
    <header className="flex h-18 items-center justify-center gap-x-6 border-b p-4">
      <PreviewTools />

      {/* Separator */}
      <div className="h-full w-px " />

      <WebResponseTools />

      {/* Separator */}
      <div className="h-full w-px " />

      <WebResizeTools />
    </header>
  );
}

export function PreviewTools() {
  return (
    <>
      <button className="flex items-center justify-center rounded-xl  p-2">
        <ChevronLeft className="h-6 w-6 stroke-current " />
      </button>

      <button className="flex flex-col items-start rounded-xl border  px-6 py-2">
        <div className="flex items-center gap-x-2">
          <span className="text-sm">Page: Homepage - Dipa</span>
          <ChevronDown className="h-5 w-5 stroke-current " />
        </div>
        <div className="text-xs ">https://dipainhouse.com/</div>
      </button>
      <button className="flex items-center justify-center gap-x-2 rounded-xl  px-4 py-2">
        <Eye className="h-6 w-6 stroke-current " />
        <span className="text-sm font-semibold leading-6">Preview</span>
      </button>
    </>
  );
}

export function WebResponseTools() {
  return (
    <>
      <div className="flex items-center gap-x-3">
        <button className="rounded-xl  p-2 text-blue-600">
          <DeviceDesktop className="h-6 w-6 stroke-current" />
        </button>
        <button className="rounded-xl p-2  hover:">
          <DeviceTablet className="h-6 w-6 stroke-current" />
        </button>
        <button className="rounded-xl p-2  hover:">
          <DeviceMobile className="h-6 w-6 stroke-current" />
        </button>
        <button className="rounded-xl p-2  hover:">
          <DeviceMobileRotated className="h-6 w-6 stroke-current" />
        </button>
      </div>
    </>
  );
}

export default function WebResizeTools() {
  return (
    <>
      <button className="flex items-center justify-center gap-x-2 rounded-xl  px-4 py-2">
        <span className="text-sm font-semibold leading-6">960 PX / 100%</span>
        <ChevronDown className="h-6 w-6 stroke-current " />
      </button>

      <button className="flex items-center justify-center rounded-xl  p-2">
        <Package className="h-6 w-6 stroke-current " />
      </button>
    </>
  );
}
