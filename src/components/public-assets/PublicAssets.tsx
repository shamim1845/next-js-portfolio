import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { freeDocsList } from "./freeDocsList";
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

const PublicAssets = () => {
  return (
    <motion.div variants={fadeInVariants}>
      <DropdownMenu>
        <DropdownMenuTrigger className="min-h-[44px] px-2 rounded-md hover:text-brandColor transition-colors border-none text-sm font-semibold tracking-wider font-code">
          Assets
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Free Useful Documents</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {freeDocsList.map((doc) => (
            <DropdownMenuItem key={doc.name} asChild className="min-h-[44px] cursor-pointer">
              <Link href={doc.link}>{doc.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
};

export default PublicAssets;
