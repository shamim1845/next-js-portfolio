"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Copy, Check } from "lucide-react";
import { Button } from "../ui/button";
import ScrollDown from "./ScrollDown";
import Social from "./Social";
import { containerVariants, fadeInVariants } from "../framer-motion/variants";
import { MotionDiv, MotionSection, MotionSpan } from "../framer-motion/Motion";

const socialContainerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const scrollDownVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

const HeroSection = () => {
  const roles = useMemo(() => [
    "Full Stack JavaScript Developer",
    "React & Next.js Specialist",
    "MERN Stack Developer",
    "Clean Code Enthusiast",
  ], []);
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  const [copied, setCopied] = useState(false);

  const developerObj = useMemo(() => ({
    name: "Md Shamim Hossain",
    role: roles[roleIndex],
    experience: "2+",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Nest.js",
      "MongoDB",
      "PostgreSQL"
    ],
    location: "Dhaka, Bangladesh",
    available: true
  }), [roleIndex, roles]);

  const developerJson = useMemo(() => JSON.stringify(developerObj, null, 2), [developerObj]);

  const skillRows = useMemo(() => {
    const rows = [];
    const skills = developerObj.skills;
    for (let i = 0; i < skills.length; i += 3) {
      rows.push(skills.slice(i, i + 3));
    }
    return rows;
  }, [developerObj.skills]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(developerJson);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy JSON: ", err);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const fullText = roles[roleIndex];

      if (!isDeleting) {
        // Typing: human-like variable typing speed variation
        const nextText = fullText.substring(0, currentText.length + 1);
        setCurrentText(nextText);

        if (nextText === fullText) {
          setSpeed(2500); // pause at the end of typing
          setIsDeleting(true);
        } else {
          setSpeed(Math.random() * 100 + 40); // 40ms to 140ms variation
        }
      } else {
        // Deleting: faster, uniform speed
        const nextText = fullText.substring(0, currentText.length - 1);
        setCurrentText(nextText);
        setSpeed(30);

        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setSpeed(600); // pause before next typing begins
        }
      }
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, speed, roles]);

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col justify-between w-full  mx-auto z-10"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-0 w-[350px] h-[350px] bg-brandColor/10 dark:bg-brandColor/5 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 py-10">
        {/* Left Column: Info Text & CTAs */}
        <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-5 w-full">
          {/* Availability Status Badge */}
          <MotionDiv variants={fadeInVariants}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-brandColor/5 dark:bg-zinc-950/40 text-brandColor border border-brandColor/20 backdrop-blur-md w-fit mb-2 shadow-sm hover:border-brandColor/40 hover:bg-brandColor/5 transition-all duration-300 group cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
              </span>
              <span className="tracking-wide uppercase text-[10px]">Open for opportunities</span>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeInVariants} className="flex items-center gap-2">
            <span className="text-brandColor text-xl font-semibold tracking-wide uppercase">Hi, I&apos;m</span>
            <MotionSpan
              className="text-2xl inline-block origin-[70%_70%]"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
            >
              👋
            </MotionSpan>
          </MotionDiv>

          <MotionDiv variants={fadeInVariants}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide leading-none text-foreground">
              Md{" "}
              <span className="bg-gradient-to-r from-brandColor via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                Shamim Hossain
              </span>
              .
            </h2>
          </MotionDiv>

          <MotionDiv variants={fadeInVariants} className="w-full py-2">
            <div className="relative w-full">
              {/* Invisible decoy to reserve space and prevent layout shifts */}
              <h1 className="invisible select-none pointer-events-none max-w-[750px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide leading-tight">
                Full Stack JavaScript Developer
              </h1>
              <div className="absolute inset-0 w-full h-full flex items-center">
                <h1 className="max-w-[750px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-foreground dark:text-zinc-100 leading-tight">
                  {currentText}
                  <span className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-brandColor ml-1.5 align-middle animate-pulse" />
                </h1>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeInVariants}>
            <p className="max-w-[540px] text-brandSecondary text-base sm:text-lg leading-relaxed tracking-wide mt-4">
              JavaScript Developer with{" "}
              <strong className="text-foreground dark:text-zinc-200 font-semibold">
                2+ years of experience
              </strong>{" "}
              building{" "}
              <strong className="text-brandColor/90 dark:text-brandColor font-semibold">
                fast, responsive, and scalable
              </strong>{" "}
              web applications using{" "}
              <strong className="text-foreground dark:text-zinc-200 font-semibold">
                React & Next.js
              </strong>
              . Passionate about performance, clean code, and creating premium user experiences.
            </p>
          </MotionDiv>

          <MotionDiv
            variants={socialContainerVariants}
            className="flex items-center gap-5 mt-4"
          >
            <Social />
          </MotionDiv>

          {/* Dual Action Buttons */}
          <MotionDiv variants={fadeInVariants} className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href={"/Md_Shamim_Hossain_Front_End_Developer_Resume.pdf"}
              download
              className="inline-block"
            >
              <Button
                size="lg"
                aria-label="Download Resume"
                className="group/btn relative bg-brandColor hover:bg-brandColor/95 text-white rounded-full shadow-lg shadow-brandColor/20 hover:shadow-brandColor/35 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2.5 px-6 font-semibold"
              >
                <span>Download My Resume</span>
                <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform duration-300" />
              </Button>
            </a>
            <a href="#contact" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                aria-label="Let's Connect"
                className="group/btn2 rounded-full border-border/80 hover:border-brandColor hover:bg-brandColor/5 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 px-6 text-foreground font-semibold"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 group-hover/btn2:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
          </MotionDiv>
        </div>

        {/* Right Column: Code Console Mockup */}
        <MotionDiv
          variants={fadeInVariants}
          className="flex-1 w-full max-w-[520px] lg:max-w-none"
        >
          <div className="relative w-full h-full min-h-[380px] bg-[#0c0d12]/95 backdrop-blur-md rounded-2xl border border-border/40 shadow-2xl shadow-brandColor/5 p-5 sm:p-6 font-mono text-xs sm:text-sm text-zinc-300 select-none overflow-hidden">
            {/* Console Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-border/20 mb-4">
              <div className="flex gap-1.5 w-12">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-zinc-500 text-xs tracking-wider select-none">shamim.json</span>
              <button
                onClick={handleCopy}
                className="w-12 flex justify-end text-zinc-500 hover:text-brandColor hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                title="Copy JSON"
                aria-label="Copy JSON to clipboard"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500 animate-in fade-in zoom-in-50 duration-200" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Console Code Output */}
            <div className="space-y-2 leading-relaxed text-zinc-400 dark:text-zinc-300">
              <div>
                <span className="text-amber-500 dark:text-amber-400 font-semibold">const</span>{" "}
                <span className="text-blue-500 dark:text-blue-400">developer</span>{" "}
                <span className="text-zinc-500 dark:text-zinc-400">=</span>{" "}
                <span className="text-zinc-400 dark:text-zinc-500">{"{"}</span>
              </div>
              <div className="pl-5">
                <span className="text-red-500 dark:text-red-400">name</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">&apos;{developerObj.name}&apos;</span>
                <span className="text-zinc-500">,</span>
              </div>
              <div className="pl-5">
                <span className="text-red-500 dark:text-red-400">role</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">&apos;{developerObj.role}&apos;</span>
                <span className="text-zinc-500">,</span>
              </div>
              <div className="pl-5">
                <span className="text-red-500 dark:text-red-400">experience</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-orange-500 dark:text-orange-400">{developerObj.experience}</span>
                <span className="text-zinc-500">,</span> <span className="text-zinc-500 dark:text-zinc-600">{"// years"}</span>
              </div>
              <div className="pl-5">
                <span className="text-red-500 dark:text-red-400">skills</span>
                <span className="text-zinc-500">:</span> <span className="text-zinc-400 dark:text-zinc-500">[</span>
              </div>
              {skillRows.map((row, rowIndex) => (
                <div key={rowIndex} className="pl-10">
                  {row.map((skill, skillIndex) => {
                    const isLastItem = rowIndex === skillRows.length - 1 && skillIndex === row.length - 1;
                    return (
                      <span key={skill}>
                        <span className="text-emerald-600 dark:text-emerald-400">&apos;{skill}&apos;</span>
                        {!isLastItem && <span className="text-zinc-500">, </span>}
                      </span>
                    );
                  })}
                </div>
              ))}
              <div className="pl-5">
                <span className="text-zinc-400 dark:text-zinc-500">]</span><span className="text-zinc-500">,</span>
              </div>
              <div className="pl-5">
                <span className="text-red-500 dark:text-red-400">location</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">&apos;{developerObj.location}&apos;</span>
                <span className="text-zinc-500">,</span>
              </div>
              <div className="pl-5">
                <span className="text-red-500 dark:text-red-400">available</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-orange-500 dark:text-orange-400">{String(developerObj.available)}</span>
              </div>
              <div>
                <span className="text-zinc-400 dark:text-zinc-500">{"}"}</span>
                <span className="text-zinc-500">;</span>
              </div>
              <div className="pt-3 border-t border-border/10 mt-3">
                <span className="text-zinc-500 dark:text-zinc-600">&gt; developer.sayHello()</span>
              </div>
              <div className="text-brandColor font-semibold italic">
                &quot;Building fast, responsive, and scalable web apps with passion.&quot;
              </div>
              <div className="flex items-center">
                <span className="text-zinc-500 dark:text-zinc-600">&gt; </span>
                <span className="w-2.5 h-4 bg-brandColor ml-1.5 animate-pulse" />
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>

      <MotionDiv
        variants={scrollDownVariants}
        className="flex justify-center py-5 md:pt-10"
      >
        <ScrollDown />
      </MotionDiv>
    </MotionSection>
  );
};

export default HeroSection;
