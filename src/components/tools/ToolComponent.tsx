import LinkButton from "../LinkButton";

interface ToolComponentProps {
  name: string;
  img: string;
  url: string;
  description?: string;
}

const ToolComponent = ({ name, img, url, description }: ToolComponentProps) => {
  return (
    <div className="lg:w-[24%] md:w-[48%] dark:bg-[#1F2937] bg-white rounded-[32px] p-5 my-2 py-10">
      <div className="flex justify-between items-start">
        <div>
          <img src={img} alt="name" className="h-12" />
          <h3 className="text-2xl py-2">{name}</h3>
        </div>
        <LinkButton url={url} />
      </div>
      <p className="text-sm dark:text-gray-300 text-gray-600">{description}</p>
    </div>
  );
};

export default ToolComponent;
