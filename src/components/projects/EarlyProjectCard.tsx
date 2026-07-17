"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ExternalLink, Github, Folder } from "lucide-react";
import { ProjectProps } from "./projectConstant";
import { MotionDiv } from "../framer-motion/Motion";
import { fadeInVariants } from "../framer-motion/variants";

const EarlyProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <MotionDiv
      variants={fadeInVariants}
      className="relative overflow-hidden group rounded-2xl border border-border/30 w-full h-full bg-card/10 dark:bg-zinc-950/20 shadow-lg aspect-[16/10] cursor-default"
    >
      {/* Background/Base Image */}
      <div className="w-full h-full relative z-0">
        {project.images?.length ? (
          <>
            <Image
              alt={project.name}
              src={project.images[0]}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            {/* Overlay Tint */}
            <div className="absolute inset-0 bg-brandColor/5 opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
          </>
        ) : null}
      </div>

      {/* Hover Sliding Glassmorphic Panel */}
      <div className="absolute inset-0 bg-background/95 dark:bg-[#0c0d12]/95 backdrop-blur-md flex flex-col gap-4 p-5 sm:p-6 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out overflow-y-auto overflow-x-hidden z-20">
        {/* Header Bar: Folder Icon & Live Action Buttons */}
        <div className="flex justify-between items-center w-full shrink-0">
          <div className="text-brandColor/80 p-2 rounded-xl bg-brandColor/5 border border-brandColor/15">
            <Folder className="w-5 h-5" />
          </div>
          
          <div className="flex items-center gap-2">
            {/* Front End */}
            {project?.gitHubLinks?.frontEnd && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={project.gitHubLinks.frontEnd}
                      target="_blank"
                      className="p-2 rounded-lg border border-border/40 hover:border-brandColor/35 bg-card/40 dark:bg-zinc-950/20 hover:bg-brandColor/5 text-muted-foreground hover:text-brandColor hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
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
                      className="p-2 rounded-lg border border-border/40 hover:border-brandColor/35 bg-card/40 dark:bg-zinc-950/20 hover:bg-brandColor/5 text-muted-foreground hover:text-brandColor hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
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
                      className="p-2 rounded-lg border border-border/40 hover:border-brandColor/35 bg-card/40 dark:bg-zinc-950/20 hover:bg-brandColor/5 text-muted-foreground hover:text-brandColor hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
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
                      className="p-2 rounded-lg border border-border/40 hover:border-brandColor/35 bg-card/40 dark:bg-zinc-950/20 hover:bg-brandColor/5 text-muted-foreground hover:text-brandColor hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
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

        {/* Title & Description Container */}
        <div className="flex flex-col gap-1.5">
          <h4 className="text-lg font-bold tracking-wide text-foreground group-hover:text-brandColor transition-colors duration-300">
            {project.name}
          </h4>
          <div className="text-xs sm:text-sm text-muted-foreground dark:text-zinc-300/90 leading-relaxed tracking-wide mt-1">
            {project.description}
          </div>
        </div>

        {/* Separator & Monospace Tech Stack Tags */}
        <div className="flex flex-col gap-3 mt-auto pt-3 border-t border-border/20 shrink-0">
          <div className="flex flex-wrap gap-1.5">
            {project.technology.map((tech) => (
              <span
                key={tech.name}
                className="text-[10px] font-code px-2 py-0.5 rounded-md bg-brandColor/5 dark:bg-zinc-950/40 border border-border/20 text-brandColor dark:text-brandColor/75 select-none"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default EarlyProjectCard;
