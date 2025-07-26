import SectionHeader from "../reuseable-components/SectionHeader";
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
          <p>
            I’m a Front-End Developer at Shadhin Music Limited, focused on
            building fast, responsive, and scalable web applications using
            React.js, Next.js, TypeScript, and Tailwind CSS. I’m skilled in
            state management with Redux and Context API.
          </p>
          <br />
          <p>
            With working knowledge of Node.js, Express.js, and MongoDB, I
            collaborate effectively across the stack. I’m passionate about clean
            code, modern UI, and delivering smooth user experiences.
          </p>
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
                backgroundImage: "url('/shamim-3.jpg')",
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
