"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import useScrollHandler from "@/lib/hooks/useScrollHandler";
import Logo from "./Logo";
import NavList from "./NavList";
import { ModeToggle } from "../theme-switcher";
import { Button } from "../ui/button";
import SideBar from "./SideBar";

const Header = () => {
  // Tracl scrollbar
  const { lastScrollY, scrolling } = useScrollHandler();

  const router = useRouter();

  return (
    <header
      className={cn(
        "container flex items-center h-[5rem] px-5 md:px-10 bg-background z-50",
        scrolling === "top" &&
          lastScrollY > 300 &&
          "sticky top-0 bg-background/95 transition-all"
      )}
    >
      <nav className="flex justify-between items-center w-full">
        <Link href={"/"}>
          <Logo />
        </Link>
        <NavList classList="hidden md:flex" />
        <div className="flex items-center gap-2">
          <ModeToggle />

          <Button
            variant="outline"
            className="hidden md:block "
            onClick={() => router.push("/#contact")}
          >
            Hire me
          </Button>

          <SideBar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
