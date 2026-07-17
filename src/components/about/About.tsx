"use client";

import SectionHeader from "../reuseable-components/SectionHeader";
import { MotionDiv, MotionSection } from "../framer-motion/Motion";
import { motion } from "framer-motion";
import { Award, Code2, Sparkles, Zap } from "lucide-react";
import {
  containerVariants,
  fadeInVariants,
  sectionVariants,
} from "../framer-motion/variants";

const About = () => {
  const stats = [
    {
      icon: <Award className="w-5 h-5 text-brandColor" />,
      title: "Experience",
      value: "2+ Years",
      detail: "Full Stack Developer",
    },
    {
      icon: <Code2 className="w-5 h-5 text-brandColor" />,
      title: "Tech Focus",
      value: "JS / TS",
      detail: "React, Next.js, Node",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brandColor" />,
      title: "Projects",
      value: "15+ Done",
      detail: "Clean & modular code",
    },
    {
      icon: <Zap className="w-5 h-5 text-brandColor" />,
      title: "Philosophy",
      value: "UX First",
      detail: "Performance & beauty",
    },
  ];

  return (
    <MotionSection
      variants={sectionVariants({ from: "left" })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="about"
      className="sectionContainer relative z-10"
    >
      <SectionHeader
        title="About Me"
        className="md:items-start"
        titleClassName="before:content-['01.']"
      />

      <MotionDiv
        variants={containerVariants}
        className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-16 mt-6 w-full"
      >
        {/* Left Column: About Info & Stats Grid */}
        <MotionDiv
          variants={fadeInVariants}
          className="flex-[1.2] flex flex-col gap-6 w-full"
        >
          <div className="text-brandSecondary text-base sm:text-lg leading-relaxed tracking-wide space-y-4">
            <p>
              I’m a Front-End Developer at{" "}
              <strong className="text-foreground dark:text-zinc-100 font-semibold">
                Shadhin Music Limited
              </strong>
              , focused on building{" "}
              <strong className="text-brandColor/90 dark:text-brandColor font-semibold">
                fast, responsive, and scalable
              </strong>{" "}
              web applications using{" "}
              <strong className="text-foreground dark:text-zinc-200 font-semibold">
                React.js
              </strong>,{" "}
              <strong className="text-foreground dark:text-zinc-200 font-semibold">
                Next.js
              </strong>,{" "}
              <strong className="text-foreground dark:text-zinc-200 font-semibold">
                TypeScript
              </strong>
              , and <strong className="text-foreground dark:text-zinc-200 font-semibold">Tailwind CSS</strong>. I’m skilled in state management with <strong className="text-foreground dark:text-zinc-200 font-semibold">Redux</strong>, <strong className="text-foreground dark:text-zinc-200 font-semibold">Zustand</strong> and <strong className="text-foreground dark:text-zinc-200 font-semibold">Context API</strong>.
            </p>
            <p>
              With good knowledge of{" "}
              <strong className="text-foreground dark:text-zinc-200 font-semibold">
                Node.js, Express.js, Nest.js, MongoDB,
              </strong>
              {" "} and {" "}
              <strong className="text-foreground dark:text-zinc-200 font-semibold">
                PostgreSQL
              </strong>.
              I collaborate effectively across the stack. I’m passionate about clean code, modern UI systems, and delivering smooth, high-fidelity user experiences.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card flex flex-col gap-2 p-4 rounded-2xl border border-border/30 bg-card/20 dark:bg-zinc-950/20 backdrop-blur-md hover:border-brandColor/25 hover:bg-card/40 transition-all duration-300 group shadow-sm hover:shadow-brandColor/5 hover:-translate-y-1 cursor-default"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-brandColor/10 text-brandColor group-hover:scale-105 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <h5 className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                    {stat.title}
                  </h5>
                  <h4 className="text-lg font-extrabold text-foreground tracking-wide mt-0.5">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-brandSecondary mt-1 leading-normal">
                    {stat.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>

        {/* Right Column: Profile Picture Container */}
        <MotionDiv
          variants={fadeInVariants}
          className="flex-1 flex justify-center items-center relative w-full lg:w-auto mt-6 lg:mt-0"
        >
          {/* Ambient Glow Blob */}
          <div className="absolute w-[280px] h-[280px] bg-brandColor/10 dark:bg-brandColor/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

          {/* Decorative Dot Grids */}
          <div className="absolute -top-6 lg:left-8 -left-2 w-24 h-24 bg-dot-pattern opacity-50 dark:opacity-30 -z-10 pointer-events-none" />
          <div className="absolute -bottom-6 lg:right-8 -right-2 w-24 h-24 bg-dot-pattern opacity-50 dark:opacity-30 -z-10 pointer-events-none" />

          {/* Floating Card Wrapper */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-[22rem] max-w-full aspect-square rounded-2xl border border-border/40 shadow-2xl overflow-hidden hover:scale-[1.01] hover:border-brandColor/30 transition-all duration-500 group"
          >
            {/* The Picture Frame */}
            <div
              className="w-full h-full relative"
              style={{
                backgroundImage: "url('/shamim-3.jpg')",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {/* Ledger Line Shimmers (Polished) */}
              <span className="absolute -top-1 left-0 z-20 h-0.5 w-12 animate_ledger_left_right rounded-full bg-gradient-to-r from-transparent to-brandColor"></span>
              <span className="absolute top-auto -bottom-1 left-auto z-20 h-0.5 w-12 animate_ledger_right_left rounded-full bg-gradient-to-r from-brandColor to-transparent"></span>
              <span className="absolute -left-1 top-auto z-20 h-12 w-0.5 animate_ledger_bottom_top rounded-full bg-gradient-to-t from-transparent to-brandColor"></span>
              <span className="absolute left-auto -right-1 z-20 h-12 w-0.5 animate_ledger_top_bottom rounded-full bg-gradient-to-b from-transparent to-brandColor"></span>

              {/* Tint overlay on hover */}
              <div className="absolute inset-0 bg-brandColor/5 opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
            </div>
          </motion.div>
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
};

export default About;
