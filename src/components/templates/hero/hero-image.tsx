"use client";

import Image from "next/image";

export default function HeroImage() {
  const localStorage = typeof window !== "undefined" ? window.localStorage : null;
  const theme = localStorage ? localStorage.getItem("theme") : "light";

  if (theme === "light") {
    return (
      <Image
        src="/images/landing-light.png"
        width={1330}
        height={100}
        alt="Logo"
        className="border-2 m-10 rounded-lg object-contain"
      />
    );
  }

  return (
    <Image
      src="/images/landing-dark.png"
      width={1330}
      height={100}
      alt="Logo"
      className="border-2 m-10 rounded-lg object-contain"
    />
  );
}
