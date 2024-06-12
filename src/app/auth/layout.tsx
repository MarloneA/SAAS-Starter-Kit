import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
        {children}
      </div>
      <div className="flex flex-1 w-full flex-col p-10 border-l-2 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Welcome to <Link href="/">Saas kit</Link>
        </h2>
        <p className="text-iridium md:text-sm mb-10">
          saas starter kit can be used to support multiple projects... <br />
          comes with built in utilities
        </p>
        <Image
          src="/images/landing.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className=" shrink-0 !w-[1600px]"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default Layout;
