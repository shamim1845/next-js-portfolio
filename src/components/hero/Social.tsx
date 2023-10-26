import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialConstant = [
  {
    title: "Github",
    icon: <Github className="sicial_icon" />,
    link: "https://github.com/shamim1845",
  },
  {
    title: "Linkedin",
    icon: <Linkedin className="sicial_icon" />,
    link: "https://www.linkedin.com/in/shamim1845",
  },
  {
    title: "Twitter",
    icon: <Twitter className="sicial_icon" />,
    link: "https://twitter.com/shamim1845",
  },
];

const Social = () => {
  return (
    <div className="flex gap-5 ">
      {socialConstant.map((social) => (
        <TooltipProvider key={social.title}>
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
      ))}
    </div>
  );
};

export default Social;
