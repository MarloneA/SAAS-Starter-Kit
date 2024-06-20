import SignInFormProvider from "@/components/forms/sign-in/form-provider";
import LoginForm from "@/components/forms/sign-in/login-form";
import { Button } from "@/components/_ui/button";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex-1 md:px-16 py-36 w-full">
      <div className="flex flex-col gap-3 h-full">
        <SignInFormProvider>
          <div className="flex flex-col gap-3">
            <LoginForm />
            <div className="flex flex-col items-center gap-3 w-full">
              <Button type="submit" className="w-full">
                Submit
              </Button>
              <p>
                Don’t have an account?{" "}
                <Link href="/auth/sign-up" className="font-bold">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </SignInFormProvider>
      </div>
    </div>
  );
};

export default SignInPage;
