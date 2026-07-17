"use client";

import Image from "next/image";
import SectionHeader from "../reuseable-components/SectionHeader";
import dynamic from "next/dynamic";
import { MotionDiv, MotionSection } from "../framer-motion/Motion";
import {
  containerVariants,
  fadeInVariants,
  sectionVariants,
} from "../framer-motion/variants";

const Fancybox = dynamic(() => import("../reuseable-components/FancyBox"), {
  ssr: false,
});

const achivementConstants = [
  { 
    id: 1, 
    img: "/achivements/LWS-Certificate.jpg", 
    alt: "LWS-Redux-Certificate",
    title: "Think in a Redux Way",
    platform: "Learn with Sumit"
  },
  {
    id: 2,
    img: "/achivements/LWS-Excellence-Certificate.jpg",
    alt: "LWS-Excellence-Certificate",
    title: "Performance Excellence Award",
    platform: "Learn with Sumit"
  },
  {
    id: 3,
    img: "/achivements/5e4639ae-f9e3-4339-af56-d89093fdafc7-md-shamim-hossain-080391f6-fd8d-4d83-a039-5908c346e3e6-certificate.jpg",
    alt: "Cloudinary-Developer-Certificate",
    title: "Cloudinary Developer Training",
    platform: "Cloudinary Academy"
  },
  {
    id: 4,
    img: "/achivements/Courser-DEC2UHWKAVLN.jpg",
    alt: "Meta-Front-End-Certificate",
    title: "Introduction to Front-End Development",
    platform: "Meta (Coursera)"
  },
];

const Achievements = () => {
  return (
    <MotionSection
      variants={sectionVariants({ from: "right" })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="achievements"
      className="sectionContainer relative z-10"
    >
      <SectionHeader
        title="Achievements"
        className=""
        titleClassName="before:content-['04.']"
      />

      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full"
      >
        {achivementConstants.map((achivement) => (
          <MotionDiv variants={fadeInVariants} key={achivement.id}>
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <a 
                data-fancybox="achivements" 
                href={achivement.img}
                className="glass-card group flex flex-col justify-between w-full h-full rounded-2xl border border-border/30 bg-card/10 dark:bg-zinc-950/10 p-4 backdrop-blur-md hover:border-brandColor/25 hover:shadow-brandColor/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-zoom-in block"
              >
                {/* Image Showcase Container */}
                <div className="w-full aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden rounded-xl border border-border/20 bg-card/30 dark:bg-zinc-950/20 z-0 shrink-0">
                  <Image
                    src={achivement.img}
                    alt={achivement.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover hover:scale-[1.02] transition-transform duration-500 rounded-xl"
                  />
                  {/* Overlay Tint */}
                  <div className="absolute inset-0 bg-brandColor/5 opacity-30 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                </div>

                {/* Caption Bar */}
                <div className="mt-4 pt-3 border-t border-border/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full shrink-0">
                  <span className="text-sm font-semibold tracking-wide text-foreground group-hover:text-brandColor transition-colors duration-300">
                    {achivement.title}
                  </span>
                  <span className="text-[10px] font-code text-zinc-500 group-hover:text-brandColor/80 uppercase tracking-widest transition-colors duration-300 shrink-0">
                    {achivement.platform}
                  </span>
                </div>
              </a>
            </Fancybox>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionSection>
  );
};

export default Achievements;
