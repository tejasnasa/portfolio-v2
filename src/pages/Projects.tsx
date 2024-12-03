import Project from "../components/projects/Project";
import Nodejs from "../components/tool-images/Nodejs";
import projectData from "../utils/data";

const Projects = () => {
  return (
    <section className="flex flex-wrap w-[84%] mx-auto pt-20 dark:text-white justify-around dark:bg-[#1A1A1A] bg-[#f7f2f2]">
      {projectData.map((proj, index) => (
        <Project
          name={proj.name}
          description={proj.description}
          github={proj.github}
          livelink={proj.livelink}
          tools={proj.tools}
        />
      ))}
    </section>
  );
};

export default Projects;
