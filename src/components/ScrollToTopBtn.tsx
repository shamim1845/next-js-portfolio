"use client";

import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { MotionDiv } from "./framer-motion/Motion";
import { ArrowUp } from "lucide-react";
import { sectionVariants } from "./framer-motion/variants";

const ScrollToTopBtn = () => {
  return (
    <MotionDiv
      variants={sectionVariants({ from: "left" })}
      initial="hidden"
      animate="visible"
      className="relative z-50"
    >
      <ScrollToTop
        smooth
        className="left-[20px] md:left-[40px] !z-50 !rounded-full !bg-brandColor hover:!bg-brandColor/95 !shadow-lg !shadow-brandColor/25 !border !border-brandColor/30 hover:scale-105 active:scale-95 transition-all duration-300 flex justify-center items-center"
        color="#fff"
        component={<ArrowUp className="w-5 h-5 text-white stroke-[2.5]" />}
      />
    </MotionDiv>
  );
};

export default ScrollToTopBtn;
