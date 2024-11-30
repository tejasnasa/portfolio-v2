import * as Types from "../utils/types";

const Home = ({onChangeTheme}: Types.HomeProps) => {
  return <section className="dark:text-white dark:bg-black">
    <h1>Home</h1>
    <button onClick={onChangeTheme}>theme</button>
  </section>
};

export default Home;
