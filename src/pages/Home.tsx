import Bio from "../components/home/Bio";
import Carousel from "../components/home/Carousel";
import ThemeSwitch from "../components/home/ThemeSwitch";

interface HomeProps {
  isDarkMode: boolean;
  handleThemeSwitch: () => void;
}

const Home = ({ isDarkMode, handleThemeSwitch }: HomeProps) => {
  return (
    <section className="h-dvh flex flex-wrap w-[88%] mx-auto pt-12">
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
