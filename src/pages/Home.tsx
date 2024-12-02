import Bio from "../components/home/Bio";
import Carousel from "../components/home/Carousel";
import ThemeSwitch from "../components/home/ThemeSwitch";

interface HomeProps {
  isDarkMode: boolean;
  handleThemeSwitch: () => void;
}

const Home = ({ isDarkMode, handleThemeSwitch }: HomeProps) => {
  return (
    <section className="dark:bg-[#1A1A1A] bg-[#F7F2F2] h-[5000px] flex dark:text-white flex-wrap">
      <h1>Home</h1>
      <Bio />
      <ThemeSwitch
        isDarkMode={isDarkMode}
        handleThemeSwitch={handleThemeSwitch}
      />
      <Carousel />
    </section>
  );
};

export default Home;
