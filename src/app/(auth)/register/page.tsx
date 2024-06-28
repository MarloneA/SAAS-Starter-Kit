import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/_ui/button";
import Link from "next/link";
import { UserRegistrationForm } from "@/components/user-auth-form";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthFormPage = ({ className, ...props }: UserAuthFormProps) => {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="font-semibold text-2xl tracking-tight">
          Create an account
        </h1>
        <p className="text-muted-foreground text-sm">
          Enter your email below to create your account
        </p>
      </div>
      <UserRegistrationForm />
      <p className="px-8 text-center text-muted-foreground text-sm">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="hover:text-primary underline underline-offset-4"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="hover:text-primary underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

export default UserAuthFormPage;
