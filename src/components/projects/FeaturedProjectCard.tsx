"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { ProjectProps } from "./projectConstant";
import { MotionDiv } from "../framer-motion/Motion";
import { fadeInVariants } from "../framer-motion/variants";

const Fancybox = dynamic(() => import("../reuseable-components/FancyBox"), {
  ssr: false,
});

const ProjectCard = ({
  project,
  number,
}: {
  project: ProjectProps;
  number: number;
}) => {
  return (
    <MotionDiv
      variants={fadeInVariants}
      className="glass-card flex flex-col gap-6 w-full rounded-3xl border border-border/30 bg-card/10 dark:bg-zinc-950/10 p-5 sm:p-7 backdrop-blur-md shadow-2xl hover:shadow-brandColor/5 hover:border-brandColor/25 transition-all duration-500 relative overflow-hidden cursor-default"
    >
      {/* 1. Image Gallery Banner (Full width on top) */}
      <div className="w-full relative z-10 group/img overflow-hidden rounded-2xl border border-border/40 shadow-xl bg-card/40 dark:bg-zinc-950/20 aspect-[16/10] md:aspect-[21/9]">
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          {project?.images?.map((img, index) => (
            <a
              key={img}
              data-fancybox={`gallery-${project.name}`}
              href={img}
              className={cn(index === 0 ? "block relative w-full h-full overflow-hidden rounded-2xl" : "hidden")}
            >
              <Image
                alt={project.name}
                src={img}
                width={1200}
                height={600}
                priority
                className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-700 rounded-2xl"
              />
              {/* Overlay Tint */}
              <div className="absolute inset-0 bg-brandColor/5 opacity-30 group-hover/img:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
            </a>
          ))}
        </Fancybox>
      </div>

      {/* 2. Project Info and Links (Stacked below) */}
      <div className="flex flex-col gap-5 w-full mt-1">
        {/* Header: Name on left, Actions on right */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border/20">
          <div>
            <span className="text-xs font-code font-bold tracking-widest text-brandColor uppercase">
              Featured Project
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold tracking-wide text-foreground mt-0.5">
              {project.name}
            </h4>
          </div>

          {/* Action Link Icons */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Front End */}
            {project?.gitHubLinks?.frontEnd && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={project.gitHubLinks.frontEnd}
                      target="_blank"
                      className="p-2.5 rounded-xl border border-border/40 hover:border-brandColor/35 bg-card/40 dark:bg-zinc-950/20 hover:bg-brandColor/5 text-muted-foreground hover:text-brandColor hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                      aria-label="GitHub Front-End Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="font-code text-xs">
                    <p>Front-End Code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {/* Back End */}
            {project?.gitHubLinks?.backEnd && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={project.gitHubLinks.backEnd}
                      target="_blank"
                      className="p-2.5 rounded-xl border border-border/40 hover:border-brandColor/35 bg-card/40 dark:bg-zinc-950/20 hover:bg-brandColor/5 text-muted-foreground hover:text-brandColor hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                      aria-label="GitHub Back-End Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="font-code text-xs">
                    <p>Back-End Code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {/* Full Stack */}
            {project?.gitHubLinks?.fullStack && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={project.gitHubLinks.fullStack}
                      target="_blank"
                      className="p-2.5 rounded-xl border border-border/40 hover:border-brandColor/35 bg-card/40 dark:bg-zinc-950/20 hover:bg-brandColor/5 text-muted-foreground hover:text-brandColor hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                      aria-label="GitHub Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="font-code text-xs">
                    <p>Source Code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {/* Live Link */}
            {project?.liveLink && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="p-2.5 rounded-xl border border-border/40 hover:border-brandColor/35 bg-card/40 dark:bg-zinc-950/20 hover:bg-brandColor/5 text-muted-foreground hover:text-brandColor hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                      aria-label="Live Demo Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="font-code text-xs">
                    <p>Live Demo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>

        {/* Rich Description */}
        <div className="text-sm text-muted-foreground dark:text-zinc-300/90 tracking-wide leading-relaxed space-y-4">
          {project.description}
        </div>

        {/* Tech Stack Footer */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-border/10">
          {project.technology.map((tech) => (
            <span
              key={tech.name}
              className="text-xs font-code font-semibold px-2.5 py-1 rounded-md bg-brandColor/5 dark:bg-zinc-950/40 border border-border/20 text-brandColor dark:text-brandColor/80 select-none hover:border-brandColor/35 hover:bg-brandColor/5 transition-all duration-300"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
