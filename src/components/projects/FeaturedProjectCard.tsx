"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import ProjectLinks from "./ProjectLinks";
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
      className="glass-card flex flex-col gap-6 w-full rounded-3xl border border-border/70 dark:border-border/30 bg-card/10 dark:bg-zinc-950/10 p-5 sm:p-7 backdrop-blur-md shadow-sm relative overflow-hidden cursor-default"
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
          {/* Only the cover is rendered as an image; the rest are gallery links
              that Fancybox loads on demand. */}
          {project?.images?.map((img, index) =>
            index === 0 ? (
              <a
                key={img}
                data-fancybox={`gallery-${project.name}`}
                href={img}
                className="absolute inset-0 block overflow-hidden rounded-2xl"
              >
                <Image
                  alt={`${project.name} screenshot`}
                  src={img}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1060px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500 rounded-2xl"
                />
                {/* Overlay Tint */}
                <div className="absolute inset-0 bg-brandColor/5 opacity-30 group-hover/img:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
              </a>
            ) : (
              <a
                key={img}
                data-fancybox={`gallery-${project.name}`}
                href={img}
                className="hidden"
              />
            )
          )}
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
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mt-0.5">
              {project.name}
            </h3>
          </div>

          {/* Action Link Icons */}
          <div className="flex items-center gap-2 shrink-0">
            <ProjectLinks project={project} />
          </div>
        </div>

        {/* Rich Description */}
        <div className="text-sm text-muted-foreground dark:text-zinc-300/90 leading-relaxed space-y-4 max-w-[75ch]">
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
