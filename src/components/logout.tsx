"use client";

import { logout } from "../actions/auth";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  return (
    <button
      className="w-full text-left"
      onClick={async () => {
        await logout();
        router.push("/login");
      }}
    >
      logout
    </button>
  );
}
