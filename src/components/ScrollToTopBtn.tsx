"use client";

import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { MotionDiv } from "./framer-motion/Motion";
import { ArrowBigUp } from "lucide-react";
import { sectionVariants } from "./framer-motion/variants";

const ScrollToTopBtn = () => {
  return (
    <MotionDiv
      variants={sectionVariants({ from: "left" })}
      initial="hidden"
      animate="visible"
    >
      <ScrollToTop
        smooth
        className="left-10 !bg-brandColor hover:!bg-brandColor/90 transition-all flex justify-center items-center"
        color="#fff"
        component={<ArrowBigUp width={28} height={28} />}
      />
    </MotionDiv>
  );
};

export default ScrollToTopBtn;
