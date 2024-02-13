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

const Header = () => {
  // Track scrollbar
  const { lastScrollY, scrolling } = useScrollHandler();
  const router = useRouter();

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
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
        <NavList classList="hidden lg:flex" />
        <div className="flex items-center gap-2">
          <PublicAssets />
          <ModeToggle />
          <motion.div variants={fadeInVariants}>
            <Button
              variant="outline"
              className="hidden lg:block "
              onClick={() => router.push("/#contact")}
              aria-label="Hire me"
            >
              Hire me
            </Button>
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <SideBar />
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
