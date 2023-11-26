import Image from "next/image";
import SectionHeader from "../reuseable-components/SectionHeader";
import dynamic from "next/dynamic";
import { error } from "console";

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
];

const Achievements = () => {
  return (
    <section id="achievements" className="sectionContainer">
      <SectionHeader
        title="Achievements"
        className=""
        titleClassName="before:content-['04.']"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {achivementConstants.map((achivement) => (
          <div key={achivement.id}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
