"use client"
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      onClick={() => signOut({ redirectTo: "/login" })}
      className="bg-red-400 w-[60px] h-[30px] rounded-md hover:cursor-pointer hover:bg-red-300"
    >
      Logout
    </button>
  );
}
