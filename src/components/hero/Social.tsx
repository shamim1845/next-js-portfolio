"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const socialConstant = [
  {
    title: "Github",
    icon: <Github className="sicial_icon" aria-hidden="true" />,
    link: "https://github.com/shamim1845",
  },
  {
    title: "Linkedin",
    icon: <Linkedin className="sicial_icon" aria-hidden="true" />,
    link: "https://www.linkedin.com/in/shamim1845",
  },
  {
    title: "Twitter",
    icon: <Twitter className="sicial_icon" aria-hidden="true" />,
    link: "https://twitter.com/shamim1845",
  },
];

const iconVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Social = () => {
  return (
    <TooltipProvider>
      <div className="flex gap-1 -ml-2.5">
        {socialConstant.map((social) => (
          <motion.div variants={iconVariants} key={social.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.title} profile (opens in a new tab)`}
                  className="group flex h-11 w-11 items-center justify-center rounded-full"
                >
                  {social.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.title}</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default Social;
