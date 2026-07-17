"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import useScrollHandler from "@/lib/hooks/useScrollHandler";
import { MotionDiv } from "./framer-motion/Motion";

const TrackScroll = () => {
  const { scrollYProgress } = useScroll();
  // Track scrollbar
  const { scrolling } = useScrollHandler();

  if (scrolling === "top") return null;

  return (
    <MotionDiv
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[10px] bg-brandColor origin-[0%] z-50"
    />
  );
};

export default TrackScroll;
