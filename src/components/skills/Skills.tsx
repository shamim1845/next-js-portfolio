"use client";

import Image from "next/image";
import SectionHeader from "../reuseable-components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillsConstant } from "./skillsConstant";
import { MotionDiv, MotionSection } from "../framer-motion/Motion";
import {
  containerVariants,
  fadeInVariants,
  sectionVariants,
} from "../framer-motion/variants";

const Skills = () => {
  return (
    <MotionSection
      variants={sectionVariants({ from: "right" })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="skills"
      className="sectionContainer relative z-10"
    >
      <SectionHeader
        title="Skills"
        className=""
        titleClassName="before:content-['02.']"
      />

      <MotionDiv variants={containerVariants} className="w-full">
        <Tabs
          defaultValue={skillsConstant[0].identifier}
          className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start w-full"
        >
          {/* Tabs Sidebar List */}
          <MotionDiv
            variants={fadeInVariants}
            className="w-full md:w-[18rem] lg:w-[22rem] shrink-0"
          >
            <TabsList className="bg-card/40 dark:bg-zinc-950/30 border border-border/30 rounded-2xl p-2 w-full h-auto flex flex-row md:flex-col gap-1.5 justify-start items-stretch overflow-x-auto border-l-0 md:border-l-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {skillsConstant?.map((skill) => (
                <TabsTrigger
                  key={skill.btnText}
                  value={skill.identifier as string}
                  className="w-auto md:w-full shrink-0 text-left justify-start px-4 py-3.5 text-[12px] md:text-[14px] uppercase tracking-wider font-code font-semibold rounded-xl transition-all duration-300 border border-transparent hover:text-brandColor hover:bg-brandColor/5 data-[state=active]:bg-brandColor/10 dark:data-[state=active]:bg-brandColor/15 data-[state=active]:text-brandColor data-[state=active]:border-brandColor/30 data-[state=active]:border-l-0 md:data-[state=active]:border-l-2"
                >
                  {skill.btnText}
                </TabsTrigger>
              ))}
            </TabsList>
          </MotionDiv>

          {/* Tabs Panels Content */}
          <MotionDiv
            variants={fadeInVariants}
            className="flex-1 w-full"
          >
            {skillsConstant.map((skill) => (
              <TabsContent
                key={skill.identifier}
                value={skill.identifier as string}
                className="w-full mt-0"
              >
                <div className="w-full bg-card/20 dark:bg-zinc-950/20 border border-border/30 backdrop-blur-md rounded-2xl p-4 sm:p-8 flex flex-col gap-6 shadow-sm hover:shadow-brandColor/5 transition-all duration-300">
                  {/* Category Title Header */}
                  <div className="flex items-center gap-2 pb-3.5 border-b border-border/20">
                    <span className="text-brandColor/70 dark:text-brandColor/80 font-mono text-base font-bold tracking-wide select-none">{"@"}</span>
                    <h3 className="text-sm sm:text-base font-bold tracking-wider text-foreground font-code uppercase">
                      {skill.btnText}
                    </h3>
                  </div>

                  {/* Skills Pill Badges Grid */}
                  <MotionDiv
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex gap-3 flex-wrap"
                  >
                    {skill.technology.map((tech) => (
                      <MotionDiv
                        variants={fadeInVariants}
                        key={tech.name}
                        className="glass-card flex items-center gap-3 py-2.5 px-4 rounded-xl border border-border/40 bg-card/40 dark:bg-zinc-950/30 backdrop-blur-sm hover:border-brandColor/30 hover:bg-brandColor/5 hover:-translate-y-0.5 transition-all duration-300 group select-none cursor-default"
                      >
                        <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            sizes="24px"
                            priority
                            className="object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 group-hover:text-brandColor transition-colors duration-300">
                          {tech.name}
                        </span>
                      </MotionDiv>
                    ))}
                  </MotionDiv>
                </div>
              </TabsContent>
            ))}
          </MotionDiv>
        </Tabs>
      </MotionDiv>
    </MotionSection>
  );
};

export default Skills;
