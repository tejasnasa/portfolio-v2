import ToolWrapper from "../components/ToolWrapper";
import bootstrap from "../assets/tools/bootstrap.svg";

const toolData = {
  bootstrap: {
    img: bootstrap,
    url: "https://getbootstrap.com/",
  },
  // Add more tools here...
};

const createTools = (page: string) => {
  return Object.fromEntries(
    Object.entries(toolData).map(([key, { img, url }]) => [
      key,
      <ToolWrapper key={key} page={page} img={img} url={url} />,
    ])
  );
};

const tools = {
  projects: createTools("projects"),
  tools: createTools("tools"),
};

export const projectTools = tools.projects;
export const toolTools = tools.tools;
