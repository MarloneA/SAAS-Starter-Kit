"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/_ui/primitives/input";
import { toast } from "@/components/_ui/primitives/use-toast";

interface DocsSearchProps extends React.HTMLAttributes<HTMLFormElement> {}

export function DocsSearch({ className, ...props }: DocsSearchProps) {
  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    return toast({
      title: "Not implemented",
      description: "We're still working on the search.",
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("relative w-full", className)}
      {...props}
    >
      <Input
        type="search"
        placeholder="Search documentation..."
        className="sm:pr-12 w-full sm:w-64 h-8"
      />
      <kbd className="top-1.5 right-1.5 absolute sm:flex items-center gap-1 hidden bg-background opacity-100 px-1.5 border rounded h-5 font-medium font-mono text-[10px] text-muted-foreground pointer-events-none select-none">
        <span className="text-xs">⌘</span>K
      </kbd>
    </form>
  );
}
