import { cn } from "@/lib/utils";

export function TypographyList({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className: String;
}>) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}
