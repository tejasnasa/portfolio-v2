import Project from "../components/projects/Project";
import projectData from "../utils/ProjData";

const Projects = () => {
  return (
    <section className="flex flex-wrap w-[84%] mx-auto pt-20 dark:text-white justify-around dark:bg-[#1A1A1A] bg-[#f7f2f2]">
      {projectData.map((proj) => (
        <Project {...proj} key={proj.name} />
      ))}
    </section>
  );
};

export default Projects;
