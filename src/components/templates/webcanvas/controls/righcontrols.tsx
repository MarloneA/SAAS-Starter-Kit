import ChevronDown from "@/components/_ui/icons/canvas/chevron-down";
import DeviceDesktop from "@/components/_ui/icons/canvas/device-desktop";
import UsersIcon from "@/components/_ui/icons/canvas/users";
import Accordion from "../widgets/Accordion";
import AlignBottom from "@/components/_ui/icons/canvas/align-bottom";
import AlignCenter from "@/components/_ui/icons/canvas/align-center";
import AlignLeft from "@/components/_ui/icons/canvas/align-left";
import AlignRight from "@/components/_ui/icons/canvas/align-right";
import AlignTop from "@/components/_ui/icons/canvas/align-top";
import AlignMiddle from "@/components/_ui/icons/canvas/align-middle";
import Eye from "@/components/_ui/icons/canvas/eye";
import { Button } from "@/components/_ui/primitives/button";

export function RightControls() {
  return (
    <aside className="flex h-screen w-[300px] flex-col border-l bg-background py-2">
      <div className="flex h-18 items-center gap-x-4 border-b px-6">
        <Button variant="default">
          <UsersIcon className="h-5 w-5 mr-2 stroke-current" />
          Invite
        </Button>
        <Button variant="destructive">Publish</Button>
      </div>
      <div className="flex flex-1 flex-col overflow-y-scroll">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <span className="text-sm font-semibold"> Selector </span>
          <span className="text-sm">
            Inheriting <span className="text-sm font-medium">2 Selectors</span>
          </span>
        </div>
        <div className="border-b px-6 py-4">
          <Button variant="secondary" className="flex w-full">
            <div className="flex items-center gap-x-2">
              <span className="rounded-lg p-1 shadow">
                <DeviceDesktop className="h-5 w-5 stroke-current text-blue-600" />
              </span>
              <span className="rounded-lg px-3 py-1 text-sm font-semibold text-blue-600">
                H1 - hero_title
              </span>
            </div>
            <ChevronDown className="h-5 w-5 stroke-current" />
          </Button>
          <div className="mt-2 text-xs">1 on this page, 7 on other pages</div>
        </div>
        <Accordion title="layout">
          <div className="flex items-center justify-between">
            <Button className="rounded-lg border p-2 hover">
              <AlignBottom className="h-5 w-5 stroke-current" />
            </Button>
            <Button className="rounded-lg border p-2 hover">
              <AlignCenter className="h-5 w-5 stroke-current" />
            </Button>
            <Button className="rounded-lg border p-2 hover">
              <AlignLeft className="h-5 w-5 stroke-current" />
            </Button>
            <Button className="rounded-lg border p-2 hover">
              <AlignRight className="h-5 w-5 stroke-current" />
            </Button>
            <Button className="rounded-lg border p-2 hover">
              <AlignTop className="h-5 w-5 stroke-current" />
            </Button>
            <Button className="rounded-lg border p-2 hover">
              <AlignMiddle className="h-5 w-5 stroke-current" />
            </Button>
          </div>
        </Accordion>
        <Accordion title="spacing">
          <div className="relative flex items-center rounded-xl border-2 border-dashed px-12 py-10">
            <span className="absolute left-2 top-2 text-[10px] uppercase">
              margin
            </span>
            <span className="absolute bottom-12 right-14 text-[10px] uppercase">
              padding
            </span>
            <div className="relative w-full">
              <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 flex-col items-center gap-2">
                <input
                  className="h-4 w-4 text-center text-sm outline-none"
                  defaultValue={20}
                />
                <div className="h-2 w-2 border-2 border-blue-600" />
                <input
                  className="h-4 w-4 text-center text-sm outline-none"
                  defaultValue={0}
                />
              </div>
              <div className="absolute inset-y-0 right-0 flex translate-x-1/2 items-center gap-2">
                <input
                  className="h-4 w-4 text-center text-sm outline-none"
                  defaultValue={0}
                />
                <div className="h-2 w-2 border-2 border-blue-600" />
                <input
                  className="h-4 w-4 text-center text-sm outline-none"
                  defaultValue={0}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-col items-center gap-2">
                <input
                  className="h-4 w-4 text-center text-sm outline-none"
                  defaultValue={0}
                />
                <div className="h-2 w-2 border-2 border-blue-600" />
                <input
                  className="h-4 w-4 text-center text-sm outline-none"
                  defaultValue={20}
                />
              </div>
              <div className="absolute inset-y-0 left-0 flex -translate-x-1/2 items-center gap-2">
                <input
                  className="h-4 w-4 text-center text-sm outline-none"
                  defaultValue={0}
                />
                <div className="h-2 w-2 border-2 border-blue-600" />
                <input
                  className="h-4 w-4 text-center text-sm outline-none"
                  defaultValue={0}
                />
              </div>
              <div className="h-24 w-full rounded-xl border-2 border-blue-600 px-10 py-8">
                <div className="h-full w-full rounded"></div>
              </div>
            </div>
          </div>
        </Accordion>
        <Accordion title="size">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm">W</span>
                </div>
                <input
                  className="w-full rounded-xl border px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue="Auto"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm">H</span>
                </div>
                <input
                  className="w-full rounded-xl border px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue="Auto"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm">Min W</span>
                </div>
                <input
                  className="w-full rounded-xl border px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue="Auto"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm">Max W</span>
                </div>
                <input
                  className="w-full rounded-xl border px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue="Auto"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm">Max W</span>
                </div>
                <input
                  className="w-full rounded-xl border px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue="Auto"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm">Max H</span>
                </div>
                <input
                  className="w-full rounded-xl border px-4 py-2 text-right text-sm font-semibold leading-6"
                  type="text"
                  defaultValue="Auto"
                />
              </div>
            </div>
            <div className="col-span-2">
              <Button className="relative w-full rounded-xl border py-2 pl-4 pr-10 text-right">
                <div className="absolute inset-y-0 flex items-center px-4">
                  <span className="text-sm">Overflow</span>
                </div>
                <span className="flex items-center justify-end gap-x-2 text-sm font-semibold leading-6">
                  <Eye className="h-5 w-5 stroke-current" />
                  <span>Invisible</span>
                </span>
                <div className="absolute inset-y-0 right-0 flex items-center px-4">
                  <ChevronDown className="h-5 w-5 stroke-current" />
                </div>
              </Button>
            </div>
          </div>
        </Accordion>
        <Accordion title="typography">typography elements</Accordion>
        <Accordion title="position">position elements</Accordion>
        <Accordion title="border">border controls</Accordion>
        <Accordion title="background">background controls</Accordion>
      </div>
    </aside>
  );
}
