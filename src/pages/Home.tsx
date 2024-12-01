import Bio from "../components/home/Bio";
import ThemeSwitch from "../components/home/ThemeSwitch";

interface HomeProps {
  onClick: () => void;
}

const Home = ({ onClick }: HomeProps) => {
  return (
    <section className="dark:bg-black bg-[#F7F2F2] h-lvh dark:text-white">
      <h1>Home</h1>
      <Bio />
      <ThemeSwitch onClick={onClick} />
    </section>
  );
};

export default Home;
