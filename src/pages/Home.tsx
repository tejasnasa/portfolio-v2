import Bio from "../components/home/Bio";
import Carousel from "../components/home/Carousel";
import ThemeSwitch from "../components/home/ThemeSwitch";
import ToolGrid from "../components/home/ToolGrid";
import githubw from "../assets/home/github-mark-white.png";
import LinkButton from "../components/LinkButton";
import budgex from "../assets/proj/budgex.png";
import echoes from "../assets/proj/echoes.png";
import echoes2 from "../assets/proj/echoes2.png";
import ada from "../assets/proj/ada.png";
import party from "../assets/home/party-popper.svg";

interface HomeProps {
  isDarkMode: boolean;
  handleThemeSwitch: () => void;
}

const Home = ({ isDarkMode, handleThemeSwitch }: HomeProps) => {
  return (
    <section className=" w-[84%] mx-auto my-24 text-white dark:bg-[#1A1A1A] bg-[#f7f2f2]">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-rows-4 md:grid-rows-8 sm:grid-rows-16 gap-3 aspect-square">
        <Bio />
        <div className="col-span-1 row-span-1 dark:bg-[#1F2937] bg-white rounded-[32px] overflow-hidden relative">
          <img
            src={budgex}
            className="h-[80%] object-cover mt-4 rotate-[-30deg]"
          />
          <div className="absolute bottom-4 right-4">
            <LinkButton url="https://budgex.vercel.app/" openInNewTab={true} />
          </div>
        </div>
        <ToolGrid />
        <ThemeSwitch
          isDarkMode={isDarkMode}
          handleThemeSwitch={handleThemeSwitch}
        />
        <Carousel />
        <div className="col-span-1 row-span-2 bg-gray-800 overflow-hidden rounded-[32px] transition">
          <div className="bg-gray-950 h-[1000px] w-[1000px]"></div>
        </div>
        <div className="col-span-2 row-span-1 dark:bg-[#1F2937] bg-white rounded-[32px] overflow-hidden flex pt-4 cursor-default relative transition">
          <img
            src={echoes}
            className="h-64 rotate-[-35deg] border-[1px] border-gray-700"
          />
          <img
            src={echoes2}
            className="h-56 rotate-[-35deg] border-[1px] border-gray-700"
          />
          <div className="absolute bottom-4 right-4">
            <LinkButton
              url="https://echoworld.vercel.app/"
              openInNewTab={true}
            />
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-black rounded-[32px] cursor-default text-white flex justify-center items-center relative transition">
          <img src={githubw} alt="" className="h-36" />
          <div className="absolute bottom-4 left-4">
            <LinkButton
              url="https://github.com/tejasnasa"
              openInNewTab={true}
            />
          </div>
        </div>
        <div className="col-span-2 row-span-1 dark:bg-[#1F2937] bg-white rounded-[32px] transition overflow-hidden flex justify-center relative">
          <img
            src={ada}
            className="h-64 rotate-[-25deg] border-[1px] border-gray-700"
          />
          <div className="absolute bottom-4 right-4">
            <LinkButton
              url="https://codewithada.vercel.app/"
              openInNewTab={true}
            />
          </div>
        </div>
        <div className="col-span-2 row-span-1 dark:bg-[#1F2937] bg-white rounded-[32px] transition p-8 relative">
          <img src={party} className="h-20" />
          <h4 className="text-3xl font-semibold mt-6 mb-4">Get in Touch:</h4>
          <div>
            Contact me:{" "}
            <a href="mailto:tejasnasa1908@gmail.com">tejasnasa1908@gmail.com</a>
          </div>
          <div className="absolute bottom-4 right-4">
            <LinkButton url="/contact" openInNewTab={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
