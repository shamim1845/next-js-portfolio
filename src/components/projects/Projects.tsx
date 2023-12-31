import SectionHeader from "../reuseable-components/SectionHeader";
import FeaturedProjectCard from "./FeaturedProjectCard";
import EarlyProjectCard from "./EarlyProjectCard";
import { ProjectsConstant } from "./projectConstant";

const Projects = () => {
  return (
    <section id="projects" className="sectionContainer">
      <SectionHeader
        title="Projects"
        className="md:items-start"
        titleClassName="before:content-['03.']"
      />

      {/* Featured project */}
      <div className="flex flex-col gap-20 mb-20">
        {ProjectsConstant.filter((project) => project.featured).map(
          (project, index) => (
            <FeaturedProjectCard
              key={project.name}
              project={project}
              number={index}
            />
          )
        )}
      </div>
      <br />
      {/* Early project */}
      <div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {ProjectsConstant.filter((project) => !project.featured).map(
            (project) => (
              <EarlyProjectCard key={project.name} project={project} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
