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
  { id: 1, img: "/achivements/LWS-Certificate.jpg", alt: "LWS-Excellence" },
  {
    id: 2,
    img: "/achivements/LWS-Excellence-Certificate.jpg",
    alt: "LWS-Excellence-Certificate",
  },
  {
    id: 3,
    img: "/achivements/5e4639ae-f9e3-4339-af56-d89093fdafc7-md-shamim-hossain-080391f6-fd8d-4d83-a039-5908c346e3e6-certificate.jpg",
    alt: "Cloudinary-Certificate",
  },
  {
    id: 4,
    img: "/achivements/Courser-DEC2UHWKAVLN.jpg",
    alt: "Meta - Introduction to Front End Development -Certificate",
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
      className="sectionContainer"
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
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
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
              <a data-fancybox="achivements" href={achivement.img}>
                <Image
                  src={achivement.img}
                  alt={achivement.alt}
                  width={500}
                  height={500}
                  className="w-full h-full rounded hover:scale-105 transition-all duration-300"
                />
              </a>
            </Fancybox>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionSection>
  );
};

export default Achievements;
