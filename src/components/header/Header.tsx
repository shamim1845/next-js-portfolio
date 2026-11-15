"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  // Only re-render when the header crosses the threshold, not on every scroll.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MotionHeader
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "sticky left-0 right-0 top-0 z-50 flex items-center justify-center w-full transition-[background-color,border-color,box-shadow] duration-300",
        isScrolled
          ? "glass-panel h-20 border-t-0 border-x-0 border-b border-border/50 shadow-md shadow-brandColor/5"
          : "bg-transparent h-20 border-transparent"
      )}
    >
      <nav aria-label="Main" className="flex justify-between items-center w-full max-w-[70rem] mx-auto px-5 md:px-10 xl:px-0 h-full">
        <Link href={"/"} aria-label="Md Shamim Hossain, home" className="inline-flex min-h-[44px] items-center rounded-md">
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
                "hidden lg:block rounded-full font-code tracking-wider font-semibold",
                "h-11 text-sm px-5"
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
