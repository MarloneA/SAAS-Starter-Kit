import * as React from "react";
import Link from "next/link";
import { H2, List, ListItem } from "../_ui/typography";
import { Icons } from "../icons";

function NavBar() {
  return (
    <nav className="flex max-md:flex-wrap justify-between items-center gap-5 m-auto px-7 max-md:px-5 p-2 pt-6 w-3/4 font-bold leading-[154.5%]">
      <H2 className="font-black text-2xl">
        SAAS <span className="text-red-700">KIT</span>
      </H2>
      <List className="md:flex max-md:flex-wrap justify-between gap-5 hidden my-auto max-md:max-w-full font-normal text-md text-neutral-700 leading-5 list-none self-stretch">
        <ListItem>
          <Link href="/#pricing"> Pricing</Link>
        </ListItem>
        <ListItem>
          <Link href="/#about"> Features</Link>
        </ListItem>
        <ListItem>
          <Link href="/#faq">FAQ</Link>
        </ListItem>
        <ListItem>
          <Link href="/blog">Blog</Link>
        </ListItem>
        <ListItem>
          <Link href="/docs">Documentation</Link>
        </ListItem>
      </List>
      <Link
        href="#"
        className="bg-white px-4 py-2 rounded-sm text-black"
      >
        Login
      </Link>
    </nav>
  );
}

export default NavBar;
