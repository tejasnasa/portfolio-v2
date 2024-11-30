interface HomeProps {
  onChangeTheme: () => void;
}

const Home = ({ onChangeTheme }: HomeProps) => {
  return (
    <section className="dark:bg-black bg-[#F7F2F2] h-lvh dark:text-white">
      <h1>Home</h1>
      <button onClick={onChangeTheme}>theme</button>
    </section>
  );
};

export default Home;
