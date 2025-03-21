import toolData from "../../data/toolData";
import LinkButton from "../LinkButton";
import pattern from "../../assets/home/pattern.svg";

const items = [
  toolData.TypeScript,
  toolData.Reactjs,
  toolData.Mongo,
  toolData.PostgreSQL,
  toolData.Express,
  toolData.GitHub,
  toolData.Tailwind,
  toolData.Nextjs,
  toolData.Drizzle,
  toolData.Nodejs,
];

const ToolGrid = () => {
  return (
    <div className="col-span-1 row-span-2 dark:bg-[#1F2937] bg-white rounded-[32px] overflow-hidden relative transition">
      <div className="absolute grid grid-cols-2">
        <img src={pattern} />
        <img src={pattern} />
        <img src={pattern} />
        <img src={pattern} />
        <img src={pattern} />
        <img src={pattern} />
        <img src={pattern} />
        <img src={pattern} />
      </div>
      <div className="flex flex-wrap justify-center mt-10 rotate-[35deg] w-[120%] ml-3">
        {items.map(({ img, url }) => (
          <a
            key={url}
            href={url}
            className="cursor-auto bg-[#374151] w-[27%] rounded-xl aspect-square p-4 m-2"
            target="_blank"
          >
            <img src={img} className="w-full h-auto object-contain" />
          </a>
        ))}
      </div>
      <div className="absolute bottom-4 left-4">
        <LinkButton url="/tools" openInNewTab={false} />
      </div>
    </div>
  );
};

export default ToolGrid;
