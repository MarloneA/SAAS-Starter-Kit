"use client";

import { logout } from "@/actions/auth";
import { signOut } from "@/auth";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await logout();
        router.push("/login");
      }}
    >
      logout
    </button>
  );
}

// import GoogleProvider from "next-auth/providers/google"

// GoogleProvider({
//   clientId: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   allowDangerousEmailAccountLinking: true,
// })
