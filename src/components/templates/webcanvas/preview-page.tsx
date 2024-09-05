import Bars from "@/components/_ui/icons/canvas/bars";
import Pencil from "@/components/_ui/icons/canvas/pencil";
import { Button } from "@/components/_ui/primitives/button";

export default function PreviewPage() {
  return (
    <div className="w-[1200px] m-auto bg-background my-12">
      <nav className="flex items-center justify-between px-12 py-6">
        <img className="h-11 w-11" src="/img/logo.png" alt="" />
        <div className="flex gap-x-6">
          <Button variant="destructive">Hire Us</Button>
          <Button className="p-2">
            <Bars className="h-6 w-6 stroke-current" />
          </Button>
        </div>
      </nav>
      <section className="py-16">
        <div className="px-12">
          <div className="group relative">
            <div className="pointer-events-none absolute inset-0 hidden border-2 border-blue-600 group-focus-within:block">
              <div className="absolute -translate-y-full pl-2">
                <div className="flex items-center gap-x-2 rounded-t-lg bg-blue-600 px-3 py-1 text-white">
                  <span className="text-sm">H1 - hero title</span>
                  <Pencil className="h-4 w-4 fill-current" />
                </div>
              </div>
              <div className="absolute left-0 top-0 h-2 w-2 -translate-x-full -translate-y-full border-2 border-blue-600"></div>
              <div className="absolute right-0 top-0 h-2 w-2 -translate-y-full translate-x-full border-2 border-blue-600"></div>
              <div className="absolute bottom-0 right-0 h-2 w-2 translate-x-full translate-y-full border-2 border-blue-600"></div>
              <div className="absolute bottom-0 left-0 h-2 w-2 -translate-x-full translate-y-full border-2 border-blue-600"></div>
              <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 items-center justify-center">
                <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 items-center justify-center">
                <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
              </div>
            </div>
            <h1
              className="max-w-3xl text-5xl font-bold leading-[1.4] focus:outline-none"
              contentEditable
            >
              We craft digital products for business and user goals.
            </h1>
          </div>
          <p className="mt-4 text-lg leading-loose text-gray-400">
            Help find solutions with UI / UX designs that are intuitive and in
            accordance with client business goals. We provide a high-quality
            service in UI/ UX Design & Development.
          </p>
        </div>
        <div className="flex items-center gap-4 px-12 pt-8">
          <Button variant="secondary">Let's work together</Button>
          <Button variant="default">Check our work</Button>
        </div>
      </section>
      <section className="py-16">
        <div className="px-12">
          <span className="text-sm uppercase text-gray-400">Our Projects</span>
          <div className="flex items-center justify-between">
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.4]">
              Our latest cool projects.
            </h2>
            <Button>Check our work</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 px-12 pt-8">
          <div className="flex aspect-square w-full items-center overflow-hidden bg-gray-100">
            <img
              className="h-full w-full object-cover"
              src="/img/billy.png"
              alt=""
            />
          </div>
          <div className="flex aspect-square w-full items-center overflow-hidden bg-gray-100">
            <img
              className="h-full w-full object-cover"
              src="/img/alpha-pay.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
