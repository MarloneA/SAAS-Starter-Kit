import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { H2, List, ListItem } from "../_ui/typography";

function NavBar() {
  return (
    <div className=" w-3/4 m-auto flex gap-5 justify-between items-center px-7 pt-6 p-2 font-bold leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter">
        <H2 className="font-black text-2xl">
          SAAS <span className="text-red-700">KIT</span>
        </H2>
      </div>
      <List className="gap-5 list-none justify-between self-stretch my-auto text-md leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <ListItem>
          <Link href="/#pricing"> Pricing</Link>
        </ListItem>
        <ListItem>
          <Link href="/#about"> Features</Link>
        </ListItem>
        <ListItem>
          <Link href="/#faq">FAQ</Link>
        </ListItem>
      </List>
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
