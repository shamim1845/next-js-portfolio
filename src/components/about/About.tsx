import { Play } from "lucide-react";
import SectionHeader from "../reuseable-components/SectionHeader";
import { technologyList } from "./technologyListConstant";
import { MotionDiv, MotionSection } from "../framer-motion/Motion";
import {
  containerVariants,
  fadeInVariants,
  sectionVariants,
} from "../framer-motion/variants";

const About = () => {
  return (
    <MotionSection
      variants={sectionVariants({ from: "left" })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="about"
      className="sectionContainer"
    >
      <SectionHeader
        title="About Me"
        className="md:items-start"
        titleClassName="before:content-['01.']"
      />

      <MotionDiv
        variants={containerVariants}
        className="flex justify-between items-center flex-col md:flex-row md:items-start gap-20"
      >
        {/* About ME */}
        <MotionDiv
          variants={fadeInVariants}
          className="flex-1 text-brandSecondary text-lg"
        >
          <p>Hello! I&apos;m Md Shamim Hossain, from Dhaka, Bangladesh.</p>
          <br />
          <p>
            I am a Web Developer With a strong foundation in HTML, CSS, and
            Tailwind CSS, I specialize in creating visually stunning and
            responsive web applications. My proficiency extends to JavaScript
            and TypeScript, enabling me to build dynamic and engaging user
            interfaces. I bring a wealth of experience in popular frameworks
            like React.js, Redux, and Next.js, allowing me to transform design
            concepts into seamless and interactive web experiences. While I have
            a good understanding of the backend with Node.js, Express.js, and
            MongoDB, my primary focus is on crafting exceptional front-end
            solutions.
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
          <br />
          <div>
            {technologyList.map((technology) => (
              <div key={technology} className="flex gap-2 items-center">
                <Play className="stroke-brandColor w-3" />
                <span className="text-base"> {technology}</span>
              </div>
            ))}
          </div>
        </MotionDiv>

        {/*My Picture */}
        <MotionDiv variants={fadeInVariants} className="flex-1 ">
          <div
            className="overflow-hidden rounded-lg w-[22rem]"
            style={{ opacity: "1,", transform: "none" }}
          >
            <div
              className="relative border-[10px] border-brandColor/20 rounded-lg w-full h-full "
              style={{
                backgroundImage: "url('/shamim.jpg')",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <span className="absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate_ledger_left_right rounded-full bg-gradient-to-r from-transparent to-brandColor"></span>
              <span className="absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate_ledger_right_left rounded-full bg-gradient-to-r from-brandColor to-transparent"></span>
              <span className="absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate_ledger_bottom_top rounded-full bg-gradient-to-t from-transparent to-brandColor"></span>
              <span className="absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate_ledger_top_bottom rounded-full bg-gradient-to-b from-transparent to-brandColor"></span>

              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0px",
                    margin: "0px",
                    padding: "100% 0px 0px",
                  }}
                ></span>
              </span>
            </div>
          </div>
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
};

export default About;
