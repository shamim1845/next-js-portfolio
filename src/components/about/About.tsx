import Image from "next/image";
import { Play } from "lucide-react";
import SectionHeader from "../reuseable-components/SectionHeader";
import { technologyList } from "./technologyListConstant";

const About = () => {
  return (
    <section id="about" className="sectionContainer">
      <SectionHeader
        title="About Me"
        className="md:items-start"
        titleClassName="before:content-['01.']"
      />

      <div className="flex justify-between items-center flex-col md:flex-row md:items-start gap-20">
        {/* About ME */}
        <div className="flex-1 text-brandSecondary text-lg">
          <p>Hello! My name is Md Shamim Hossain, from Rajshahi, Bangladesh.</p>
          <br />

          <p>
            I am a Front-End Web Developer. I turn Figma designs into
            mobile-friendly web templates and utilize React JS to bring these
            templates to life. I am very comfortable with Next.js and utilize
            the power of server-side rendering. I&apos;ve got the basics of the
            backend covered too, using Node.js, Express JS, and MongoDB to
            smoothly connect the backend with the frontend in single-page apps.
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
        </div>

        {/*My Picture */}
        <div className="flex-1 ">
          <div
            className="overflow-hidden rounded-lg w-[20rem]"
            style={{ opacity: "1,", transform: "none" }}
          >
            <div className="relative border-[10px] border-brandColor/20 rounded-lg w-full h-full">
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

                <Image
                  src="/shamim.webp"
                  alt="shamim"
                  width={400}
                  height={388}
                  className="w-full h-full"
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
