"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MotionDiv, MotionLi } from "../framer-motion/Motion";

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

const navListConstant = [
  {
    name: "About",
    link: "/#about",
    id: "about",
  },
  {
    name: "Skills",
    link: "/#skills",
    id: "skills",
  },
  {
    name: "Projects",
    link: "/#projects",
    id: "projects",
  },
  {
    name: "Achievements",
    link: "/#achievements",
    id: "achievements",
  },
  {
    name: "Contact",
    link: "/#contact",
    id: "contact",
  },
];

const NavList = ({ classList }: { classList?: string }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate viewport mid-point position
      const scrollMidpoint = window.scrollY + window.innerHeight / 2;

      // Handle Hero Section state (scrolled above the first section: About)
      const firstEl = document.getElementById(navListConstant[0].id);
      if (firstEl) {
        const rect = firstEl.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        if (scrollMidpoint < absoluteTop) {
          if (activeSection !== "") {
            setActiveSection("");
          }
          return;
        }
      }

      let currentSection = "";

      // Check which section currently wraps the scroll midpoint
      for (const item of navListConstant) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          const height = rect.height;

          if (scrollMidpoint >= absoluteTop && scrollMidpoint < absoluteTop + height) {
            currentSection = item.id;
            break;
          }
        }
      }

      // Fallback: Find closest section to the top of the viewport
      if (!currentSection) {
        let minDistance = Infinity;
        for (const item of navListConstant) {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = item.id;
            }
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Trigger check immediately and on scroll
    const timer = setTimeout(handleScroll, 200);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <ol
      className={cn("navLinks flex justify-start gap-5 lg:gap-10 items-center", classList)}
    >
      {navListConstant.map((navItem) => {
        const isActive = activeSection === navItem.id;
        return (
          <MotionLi
            variants={fadeInVariants}
            key={navItem.name}
            className="relative py-1"
          >
            <Link
              href={navItem.link}
              className={cn(
                "transition-colors text-sm font-semibold tracking-wider font-code",
                isActive
                  ? "text-brandColor font-bold"
                  : "text-foreground/70 hover:text-brandColor"
              )}
            >
              {navItem.name}
            </Link>
            {isActive && (
              <MotionDiv
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-brandColor rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </MotionLi>
        );
      })}
    </ol>
  );
};

export default NavList;
