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
        className="md:items-start"
        titleClassName="before:content-['03.']"
      />

      {/* Featured project */}
      <MotionDiv
        variants={containerVariants}
        className="flex flex-col gap-20 mb-20"
      >
        {ProjectsConstant.filter((project) => project.featured).map(
          (project, index) => (
            <FeaturedProjectCard
              key={project.name}
              project={project}
              number={index}
            />
          )
        )}
      </MotionDiv>
      <br />
      {/* Early project */}
      <MotionDiv
        variants={sectionVariants({ from: "left" })}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mb-10 flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold ">Other Noteworthy Projects</h4>
          <span>
            <a
              href="https://github.com/shamim1845?tab=repositories"
              className="text-sm md:text-base text-brandColor hover:underline transition-all"
              target="_blank"
            >
              view the repositories
            </a>
          </span>
        </div>

        <MotionDiv
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {ProjectsConstant.filter((project) => !project.featured).map(
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
