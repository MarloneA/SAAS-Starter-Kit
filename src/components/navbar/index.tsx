import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { TypographyH2 } from "../_typography/h2";

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <TypographyH2>SAAS kit</TypographyH2>
      </div>
      <ul className="gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <li>Home</li>
        <li>Pricing</li>
        <li>Features</li>
        <li>Contact us</li>
      </ul>
      <Link
        href="/dashboard"
        className="px-4 py-2 rounded-sm "
      >
        Free Trial
      </Link>
    </div>
  );
}

export default NavBar;
