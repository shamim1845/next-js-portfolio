import SectionHeader from "../reuseable-components/SectionHeader";
import FeaturedProjectCard from "./FeaturedProjectCard";
import EarlyProjectCard from "./EarlyProjectCard";
import { ProjectsConstant } from "./projectConstant";
import { MotionDiv, MotionSection } from "../framer-motion/Motion";
import { containerVariants, sectionVariants } from "../framer-motion/variants";

const Projects = () => {
  return (
    <MotionSection
      variants={sectionVariants({ from: "bottom" })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="projects"
      className="sectionContainer"
    >
      <SectionHeader
        title="Projects"
        className=""
        titleClassName="before:content-['03.']"
      />

      {/* Featured project */}
      <MotionDiv
        variants={containerVariants}
        className="flex flex-col gap-10 md:gap-12 mb-16"
      >
        {ProjectsConstant?.filter((project) => project.featured).map(
          (project, index) => (
            <FeaturedProjectCard
              key={project.name}
              project={project}
              number={index}
            />
          )
        )}
      </MotionDiv>
      {/* Early project */}
      <MotionDiv
        variants={sectionVariants({ from: "left" })}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mb-8 flex flex-col items-center md:items-start justify-center gap-1.5">
          <h3 className="text-lg md:text-xl font-bold font-code uppercase tracking-wider">Other Noteworthy Projects</h3>
          <span>
            <a
              href="https://github.com/shamim1845?tab=repositories"
              className="text-xs sm:text-sm font-code text-brandColor hover:underline transition-all"
              target="_blank" rel="noopener noreferrer"
            >
              {"// view all repositories"}
            </a>
          </span>
        </div>

        <MotionDiv
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {ProjectsConstant?.filter((project) => !project.featured).map(
            (project) => (
              <EarlyProjectCard key={project.name} project={project} />
            )
          )}
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
};

export default Projects;
