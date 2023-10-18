"use client";

import { usePathname, useRouter } from "next/navigation";
import NavLink from "@/components/shares/NavLink";
import "./style.module.css";
const PublicHeader = () => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(router);
  console.log(pathName);

  return (
    <header
      className="flex justify-between"
      style={{
        border: "1px solid black",
        padding: "16px 32px",
      }}
    >
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/products">Products</NavLink>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/register">Register</NavLink>
    </header>
  );
};

export default PublicHeader;
