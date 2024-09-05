import ChevronDown from "@/components/_ui/icons/canvas/chevron-down";

function Accordion({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between border-b py-4 px-6">
        <span className="text-sm font-semibold capitalize">{title}</span>
        <ChevronDown className="h-5 w-5 rotate-90 stroke-current transition-transform group-open:rotate-0" />
      </summary>
      <div className="border-b py-4 px-6">{children}</div>
    </details>
  );
}

export default Accordion;
