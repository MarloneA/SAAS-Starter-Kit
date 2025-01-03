"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  ButtonProps,
  buttonVariants,
} from "@/components/_ui/primitives/button";
import { toast } from "@/components/_ui/primitives/use-toast";
import { Icons } from "@/components/_ui/icons";

interface DocsCreateButtonProps extends ButtonProps {}

export function DocsCreateButton({
  className,
  variant,
  ...props
}: DocsCreateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onClick() {
    setIsLoading(true);

    const response = await fetch("/api/docs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Doc",
      }),
    });

    setIsLoading(false);

    if (!response?.ok) {
      if (response.status === 402) {
        return toast({
          title: "Limit of 3 posts reached.",
          description: "Please upgrade to the PRO plan.",
          variant: "destructive",
        });
      }

      return toast({
        title: "Something went wrong.",
        description: "Your doc was not created. Please try again.",
        variant: "destructive",
      });
    }

    const doc = await response.json();

    // This forces a cache invalidation.
    router.refresh();

    router.push(`/editor/docs/${doc.id}`);
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New Doc
    </button>
  );
}
