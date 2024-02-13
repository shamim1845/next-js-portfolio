import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  },
  {
    name: "Skills",
    link: "/#skills",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
  {
    name: "Achievements",
    link: "/#achievements",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

const NavList = ({ classList }: { classList?: string }) => {
  return (
    <ol
      className={cn("navLinks flex justify-start  gap-5 lg:gap-10 ", classList)}
    >
      {navListConstant.map((navItem) => (
        <motion.li variants={fadeInVariants} key={navItem.name}>
          <Link href={navItem.link}>{navItem.name}</Link>
        </motion.li>
      ))}
    </ol>
  );
};

export default NavList;
