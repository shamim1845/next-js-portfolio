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
import PublicAssets from "../public-assets/PublicAssets";
import { motion } from "framer-motion";
import { fadeInVariants, containerVariants } from "../framer-motion/variants";
import { MotionDiv, MotionHeader } from "../framer-motion/Motion";

const Header = () => {
  // Track scrollbar
  const { lastScrollY } = useScrollHandler();
  const router = useRouter();
  const isScrolled = lastScrollY > 20;

  return (
    <MotionHeader
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "sticky left-0 right-0 top-0 z-50 flex items-center justify-center w-full transition-all duration-500",
        isScrolled
          ? "glass-panel h-[4.5rem] border-t-0 border-x-0 border-b border-border/50 shadow-md shadow-brandColor/5"
          : "bg-transparent h-[5.5rem] border-transparent"
      )}
    >
      <nav className="container flex justify-between items-center w-full px-5 md:px-10 h-full">
        <Link href={"/"}>
          <Logo />
        </Link>
        <NavList classList="hidden lg:flex" />
        <div className="flex items-center gap-2">
          <PublicAssets />
          <ModeToggle />
          <MotionDiv variants={fadeInVariants}>
            <Button
              variant="outline"
              className={cn(
                "hidden lg:block transition-all duration-500 rounded-full font-code tracking-wider font-semibold",
                isScrolled ? "h-9 text-xs px-4" : "h-10 text-sm px-5"
              )}
              onClick={() => router.push("/#contact")}
              aria-label="Hire me"
            >
              Hire me
            </Button>
          </MotionDiv>
          <MotionDiv variants={fadeInVariants}>
            <SideBar />
          </MotionDiv>
        </div>
      </nav>
    </MotionHeader>
  );
};

export default Header;
