import React from "react";
import SectionHeader from "../reuseable-components/SectionHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillsConstant } from "./skillsConstant";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="sectionContainer">
      <SectionHeader
        title="Skills"
        className=""
        titleClassName="before:content-['02.']"
      />

      <Tabs
        defaultValue={skillsConstant[0].identifier}
        className="flex flex-col md:flex-row gap-5"
      >
        <TabsList className="md:w-[20rem] h-full grid grid-cols-1 grid-rows-5">
          {skillsConstant.map((skill) => (
            <TabsTrigger key={skill.btnText} value={skill.identifier as string}>
              {skill.btnText}
            </TabsTrigger>
          ))}
        </TabsList>

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
                <br />
                <div className="flex gap-10 flex-wrap">
                  {skill.technology.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col justify-center items-center"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={50}
                        height={50}
                      />
                      <h6 className="text-sm font-bold mt-2">{tech.name}</h6>
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-2"></CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Skills;
