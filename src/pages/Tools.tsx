import ToolComponent from "../components/tools/ToolComponent";
import toolData from "../data/toolData";
import img from "../assets/images/tool.svg";

const Tools = () => {
  return (
    <section className="flex flex-wrap w-[84%] pt-24 mx-auto text-white justify-around dark:bg-[#1A1A1A] bg-[#f7f2f2]">
      <div className="lg:w-[49%] md:[w-96%] dark:bg-[#1F2937] bg-white rounded-[32px] p-8 my-2 dark:text-gray-300 text-gray-600">
        <img src={img} className="h-24 mb-3" />I actively use a diverse set of
        cutting-edge technologies and tools in my daily life. From modern
        frameworks and languages to powerful platforms, my toolkit ensures high
        quality and efficient development.
      </div>
      {Object.entries(toolData).map(([key, { img, url, description }]) => {
        const capitalizedName = key.charAt(0).toUpperCase() + key.slice(1);
        return (
          <ToolComponent
            key={key}
            name={capitalizedName}
            img={img}
            url={url}
            description={description}
          />
        );
      })}
    </section>
  );
};

export default Tools;
