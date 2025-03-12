import Bio from "../components/home/Bio";
import Carousel from "../components/home/Carousel";
import ThemeSwitch from "../components/home/ThemeSwitch";
import ToolGrid from "../components/home/ToolGrid";

interface HomeProps {
  isDarkMode: boolean;
  handleThemeSwitch: () => void;
}

const Home = ({ isDarkMode, handleThemeSwitch }: HomeProps) => {
  return (
    <section className=" w-[84%] mx-auto mt-24 text-white dark:bg-[#1A1A1A] bg-[#f7f2f2]">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-rows-4 md:grid-rows-8 sm:grid-rows-16 gap-3 h-[1200px]">
        <Bio />
        <div className="col-span-1 row-span-1 dark:bg-[#1F2937] bg-white rounded-[32px]"></div>
        <ToolGrid/>
        <ThemeSwitch
          isDarkMode={isDarkMode}
          handleThemeSwitch={handleThemeSwitch}
        />
        <Carousel />
        <div className="col-span-1 row-span-2 dark:bg-[#1F2937] bg-white rounded-[32px]">
          F
        </div>
        <div className="col-span-2 row-span-1 dark:bg-[#1F2937] bg-white rounded-[32px]">
          G
        </div>
        <div className="col-span-1 row-span-1 dark:bg-[#1F2937] bg-white rounded-[32px]">
          H
        </div>
        <div className="col-span-2 row-span-1 dark:bg-[#1F2937] bg-white rounded-[32px]">
          K
        </div>
        <div className="col-span-2 row-span-1 dark:bg-[#1F2937] bg-white rounded-[32px]">
          N
        </div>
      </div>
    </section>
  );
};

export default Home;
