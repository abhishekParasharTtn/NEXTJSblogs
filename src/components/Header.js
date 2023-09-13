"use client";
import React from "react";
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();
  return (
    <div className="bg-gray-800 text-white p-5 flex">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        NEXT JS BLOGS
      </h1>
    </div>
  );
}

export default Header;
