"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";
import { buttonVariants } from "@/components/_ui/primitives/button";
import { Input } from "@/components/_ui/primitives/input";
import { Label } from "@/components/_ui/primitives/label";
import { toast } from "@/components/_ui/primitives/use-toast";
import { Icons } from "@/components/_ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  authCreate,
  authenticate,
  authenticateGithub,
  authenticateGoogle,
} from "@/actions/auth";
import { useFormState, useFormStatus } from "react-dom";

type FormData = z.infer<typeof userAuthSchema>;

export function UserLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", data.email.toLowerCase());
    formData.append("password", data.password);

    const signInResult = await authenticate(null, formData);

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  }

  return (
    <div className={cn("grid gap-6")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="gap-2 grid">
          <div className="gap-1 grid">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            <Input
              className="my-4"
              id="password"
              placeholder="enter password"
              type="password"
              required
              disabled={isLoading}
              {...register("password")}
            />
          </div>
          <button
            className={cn(buttonVariants())}
            type="submit"
            // onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
            )}
            Sign In with Credentials
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="border-t w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => authenticateGithub()}
        disabled={isLoading}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 w-4 h-4" />
        )}{" "}
        Github
      </button>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => authenticateGoogle()}
        disabled={isLoading}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 w-4 h-4" />
        )}{" "}
        Google
      </button>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {}}
        disabled={isLoading}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
        ) : (
          <Icons.mail className="mr-2 w-4 h-4" />
        )}{" "}
        email magic link
      </button>
    </div>
  );
}

export function UserRegistrationForm() {
  const [errorMessage, dispatch] = useFormState(authCreate, undefined);
  const { pending } = useFormStatus();

  const handleClick = (event: React.FormEvent) => {
    if (pending) {
      event?.preventDefault();
    }
  };

  if (errorMessage) {
    return toast({
      title: "Something went wrong.",
      description: `${errorMessage}`,
      variant: "destructive",
    });
  }
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>({
  //   resolver: zodResolver(userAuthSchema),
  // });
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  // const searchParams = useSearchParams();

  // async function onSubmit(data: FormData) {
  //   setIsLoading(true);

  //   const signInResult = await signIn("email", {
  //     email: data.email.toLowerCase(),
  //     redirect: false,
  //     callbackUrl: searchParams?.get("from") || "/dashboard",
  //   });

  //   setIsLoading(false);

  //   if (!signInResult?.ok) {
  //     return toast({
  //       title: "Something went wrong.",
  //       description: "Your sign in request failed. Please try again.",
  //       variant: "destructive",
  //     });
  //   }

  //   return toast({
  //     title: "Check your email",
  //     description: "We sent you a login link. Be sure to check your spam too.",
  //   });
  // }

  return (
    <div className={cn("grid gap-6")}>
      <form action={dispatch}>
        <div className="gap-2 grid">
          <div className="gap-1 grid">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={pending}
              name="email"
            />
            <Input
              className="my-4"
              id="password"
              placeholder="password"
              type="password"
              required
              disabled={pending}
              name="password"
            />
            {/* {errors?.email && (
              <p className="px-1 text-red-600 text-xs">
                {errors.email.message}
              </p>
            )} */}
          </div>
          <button
            className={cn(buttonVariants())}
            type="submit"
            onClick={handleClick}
            disabled={pending}
          >
            {pending && <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />}
            Sign Up with Credentials
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="border-t w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {}}
        disabled={pending}
      >
        {pending ? (
          <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 w-4 h-4" />
        )}{" "}
        Github
      </button>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {}}
        disabled={pending}
      >
        {pending ? (
          <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 w-4 h-4" />
        )}{" "}
        Google
      </button>

      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {}}
        disabled={pending}
      >
        {pending ? (
          <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
        ) : (
          <Icons.mail className="mr-2 w-4 h-4" />
        )}{" "}
        email magic link
      </button>
    </div>
  );
}
