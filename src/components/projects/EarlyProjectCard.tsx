import Image from "next/image";
import React from "react";
import Fancybox from "../reuseable-components/FancyBox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectProps {
  name: string;
  featured: boolean;
  images?: string[];
  description: React.ReactNode;
  technology: {
    name: string;
    icon: string;
  }[];
  gitHubLinks: {
    frontEnd?: string;
    backEnd?: string;
    fullStack?: string;
  };
  liveLink?: string;
}

const EarlyProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="relative overflow-hidden  group rounded">
      <div className="">
        {project.images?.length && (
          <Image
            alt={project.name}
            src={project?.images[0]}
            width={500}
            height={500}
            className="w-auto h-auto"
          />
        )}
      </div>

      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-background/90 flex flex-col gap-5 p-5 translate-y-[100%]  group-hover:translate-y-0 transition ease-in-out duration-500 overflow-y-auto overflow-x-hidden">
        {/* Name*/}
        <div>
          <h4 className="text-xl font-bold ">{project.name}</h4>
        </div>

        {/* External Links */}
        <div className="flex justify-between">
          <div className="flex gap-10">
            {/* Front End */}
            {project.gitHubLinks.frontEnd && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="">
                    <a href={project.gitHubLinks.frontEnd} target="_blank">
                      <Github className="sicial_icon" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="absolute bottom-0 left-0">
                    <p>Source Code (Front-End )</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {/* Back End */}
            {project.gitHubLinks.backEnd && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="">
                    <a href={project.gitHubLinks.backEnd} target="_blank">
                      <Github className="sicial_icon" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="absolute bottom-0 left-0">
                    <p>Source Code (Back-End)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {/* Full Stack */}
            {project.gitHubLinks.fullStack && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="">
                    <a href={project.gitHubLinks.fullStack} target="_blank">
                      <Github className="sicial_icon" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="absolute bottom-0 left-0">
                    <p>Source Code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {/* Live Link */}

            {project.liveLink && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="">
                    <a href={project.liveLink} target="_blank">
                      <ExternalLink className="sicial_icon" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="absolute bottom-0 left-0">
                    <p>Live Link</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="text-brandSecondary">{project.description}</div>

        {/* Technology */}
        <div className="flex flex-wrap  gap-5">
          {project.technology.map((technology) => (
            <div
              key={technology.name}
              className="flex flex-col items-center justify-center max-w-fit"
            >
              <Image
                src={technology.icon}
                alt={technology.name}
                width={30}
                height={30}
              />
              <span className="text-brandSecondary text-sm">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EarlyProjectCard;
