import Link from "next/link";
import { cn } from "@/lib/utils";

const NavList = ({ classList }: { classList?: string }) => {
  return (
    <ol
      className={cn("navLinks flex justify-start  gap-5 lg:gap-10 ", classList)}
    >
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
