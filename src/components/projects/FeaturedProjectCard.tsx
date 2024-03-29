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
      className={cn(
        "flex flex-col md:flex-row justify-between gap-10 ",
        Number(number) % 2 === 0 ? "" : "md:flex-row-reverse"
      )}
    >
      <div className="flex-1">
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
              data-fancybox="gallery"
              href={img}
              className={cn(index === 0 ? "block" : "hidden")}
            >
              <Image
                alt={project.name}
                src={img}
                width={500}
                height={500}
                className="w-full h-full rounded  hover:scale-105 transition-all duration-300"
              />
            </a>
          ))}
        </Fancybox>
      </div>

      <div className="flex-1 flex flex-col gap-5">
        {/* Name*/}
        <div>
          <span className="text-sm md:text-base text-brandColor">
            Featured Project
          </span>
          <h4 className="text-xl md:text-2xl font-bold ">{project.name}</h4>
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
                      <Github className="sicial_icon" aria-label="Github" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
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
                      <Github className="sicial_icon" aria-label="Github" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
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
                      <Github className="sicial_icon" aria-label="Github" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Source Code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          {/* Live Link */}
          <div>
            {project.liveLink && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="">
                    <a href={project.liveLink} target="_blank">
                      <ExternalLink
                        className="sicial_icon"
                        aria-label="Live Link"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
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
        <div className="flex flex-wrap gap-5">
          {project.technology.map((technology) => (
            <div
              key={technology.name}
              className="flex flex-col items-center justify-center max-w-fit hover:scale-105 transition-all duration-300"
            >
              <Image
                src={technology.icon}
                alt={technology.name}
                width={40}
                height={40}
                className=" "
              />
              <span className="text-brandSecondary text-sm">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
