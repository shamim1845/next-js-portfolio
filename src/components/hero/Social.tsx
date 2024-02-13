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
    icon: <Github className="sicial_icon" aria-label="Github" />,
    link: "https://github.com/shamim1845",
  },
  {
    title: "Linkedin",
    icon: <Linkedin className="sicial_icon" aria-label="Linkedin" />,
    link: "https://www.linkedin.com/in/shamim1845",
  },
  {
    title: "Twitter",
    icon: <Twitter className="sicial_icon" aria-label="Twitter" />,
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
    <div className="flex gap-5 ">
      {socialConstant.map((social) => (
        <motion.div variants={iconVariants} key={social.title}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="">
                <a href={social.link} target="_blank">
                  {social.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      ))}
    </div>
  );
};

export default Social;
