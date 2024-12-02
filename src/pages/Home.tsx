import Bio from "../components/home/Bio";
import ThemeSwitch from "../components/home/ThemeSwitch";

interface HomeProps {
  isDarkMode: boolean;
  handleThemeSwitch: () => void;
}

const Home = ({ isDarkMode, handleThemeSwitch }: HomeProps) => {
  return (
    <section className="dark:bg-[#1A1A1A] bg-[#F7F2F2] h-lvh dark:text-white">
      <h1>Home</h1>
      <Bio />
      <ThemeSwitch
        isDarkMode={isDarkMode}
        handleThemeSwitch={handleThemeSwitch}
      />
    </section>
  );
};

export default Home;
