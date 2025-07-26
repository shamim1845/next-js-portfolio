import { constant } from "@/app/constant";
import { Button } from "../ui/button";
import ScrollDown from "./ScrollDown";
import Social from "./Social";
import { containerVariants, fadeInVariants } from "../framer-motion/variants";
import { MotionDiv, MotionSection } from "../framer-motion/Motion";

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
  // constants
  const { description } = constant;

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-between mt-5 md:mt-10"
    >
      <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-5 py-10 ">
        <MotionDiv variants={fadeInVariants}>
          <span className="text-brandColor text-xl">Hi, I&apos;m</span>
        </MotionDiv>

        <MotionDiv variants={fadeInVariants}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Md Shamim Hossain.
          </h2>
        </MotionDiv>

        <MotionDiv variants={fadeInVariants}>
          <h1 className="max-w-[750px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-muted-foreground">
            Full Stack JavaScript Developer
          </h1>
        </MotionDiv>

        <MotionDiv variants={fadeInVariants}>
          <p className="max-w-[540px] text-brandSecondary text-lg">
            {description}
          </p>
        </MotionDiv>
        <MotionDiv
          variants={socialContainerVariants}
          className="flex items-center gap-5 mt-2"
        >
          <Social />
          <div className="w-full max-w-[5rem] h-[2px] bg-brandColor/50 "></div>
        </MotionDiv>

        <MotionDiv variants={fadeInVariants} className="mt-10">
          <a
            href={"/Md_Shamim_Hossain_Front_End_Developer_Resume.pdf"}
            download
          >
            <Button variant="outline" size="lg" aria-label="Download Resume">
              Download Resume
            </Button>
          </a>
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
