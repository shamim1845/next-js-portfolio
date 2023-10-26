import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const NavList = ({ classList }: { classList?: string }) => {
  return (
    <ol className={cn("navLinks flex justify-start  gap-6", classList)}>
      <li>
        <Link href={"/#about"}>About</Link>
      </li>
      <li>
        <Link href={"/#skills"}>Skills</Link>
      </li>
      <li>
        <Link href={"/#projects"}>Projects</Link>
      </li>
      <li>
        <Link href={"/#contact"}>Contact</Link>
      </li>
    </ol>
  );
};

export default NavList;
