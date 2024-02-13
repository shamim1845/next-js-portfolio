import { HeartPulse } from "lucide-react";
import Social from "../hero/Social";
import { MotionFooter } from "../framer-motion/Motion";
import { sectionVariants } from "../framer-motion/variants";

const Footer = () => {
  return (
    <MotionFooter
      variants={sectionVariants({ from: "left" })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-[6rem] md:h-[4rem] flex items-center border-t border-brandColor/50"
    >
      <div className="container  px-5 md:px-10 flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-2 ">
        <Social />
        <div className="flex gap-2">
          Created by <HeartPulse className="stroke-brandColor" /> with Shamim
        </div>
      </div>
    </MotionFooter>
  );
};

export default Footer;
