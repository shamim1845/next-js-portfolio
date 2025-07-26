import Image from "next/image";
import SectionHeader from "../reuseable-components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillsConstant } from "./skillsConstant";
import { MotionDiv, MotionSection } from "../framer-motion/Motion";
import {
  containerVariants,
  fadeInVariants,
  sectionVariants,
} from "../framer-motion/variants";

const Skills = () => {
  return (
    <MotionSection
      variants={sectionVariants({ from: "right" })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="skills"
      className="sectionContainer"
    >
      <SectionHeader
        title="Skills"
        className=""
        titleClassName="before:content-['02.']"
      />

      <MotionDiv variants={containerVariants}>
        <Tabs
          defaultValue={skillsConstant[0].identifier}
          className="flex flex-col md:flex-row gap-10"
        >
          <MotionDiv variants={fadeInVariants}>
            <TabsList className="md:w-[20rem] h-full grid grid-cols-1 grid-rows-5">
              {skillsConstant?.map((skill) => (
                <TabsTrigger
                  key={skill.btnText}
                  value={skill.identifier as string}
                >
                  {skill.btnText}
                </TabsTrigger>
              ))}
            </TabsList>
          </MotionDiv>

          <MotionDiv variants={fadeInVariants}>
            {skillsConstant.map((skill) => (
              <TabsContent
                key={skill.identifier}
                value={skill.identifier as string}
                className="flex-1"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-brandColor">
                      {skill.cardTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MotionDiv
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex gap-10 flex-wrap"
                    >
                      {skill.technology.map((tech) => (
                        <MotionDiv
                          variants={fadeInVariants}
                          key={tech.name}
                          className="flex flex-col justify-center items-center d:w-[60px] md:h-[60px] hover:scale-110 transition-all duration-300"
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={50}
                            height={50}
                          />
                          <p className="text-sm font-bold mt-2">{tech.name}</p>
                        </MotionDiv>
                      ))}
                    </MotionDiv>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </MotionDiv>
        </Tabs>
      </MotionDiv>
    </MotionSection>
  );
};

export default Skills;
