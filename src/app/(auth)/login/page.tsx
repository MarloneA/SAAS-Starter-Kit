import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/_ui/button";
import { UserLoginForm } from "@/components/user-auth-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthFormPage = async ({ className, ...props }: UserAuthFormProps) => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Link
        href="/register"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Register
      </Link>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="font-semibold text-2xl tracking-tight">Login</h1>
        <p className="text-muted-foreground text-sm">
          Enter your credentials below to login to your account
        </p>
      </div>
      <UserLoginForm />
    </div>
  );
};

export default UserAuthFormPage;
