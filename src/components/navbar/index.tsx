import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { TypographyH2 } from "../_typography/h2";
import { TypographyList } from "../_typography/ul";
import { TypographyListItem } from "../_typography/li";

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 p-2 font-bold leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter">
        <TypographyH2>SAAS kit</TypographyH2>
      </div>
      <TypographyList className="gap-5 list-none justify-between self-stretch my-auto text-md leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <TypographyListItem>
          <Link href="/"> Home</Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link href="/#pricing"> Pricing</Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link href="/#about"> Features</Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link href="/#faq">FAQ</Link>
        </TypographyListItem>
      </TypographyList>
      <Link
        href="/auth/sign-in"
        className="px-4 py-2 bg-white text-black rounded-sm"
      >
        Login
      </Link>
    </div>
  );
}

export default NavBar;
