import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const loc = useLocation().pathname;
  const activePageClass = (path: string) =>
    loc === path ? "text-green-500" : undefined;

  return (
    <header className="bg-[#F7F2F2] dark:bg-[#1A1A1A] dark:text-white flex justify-between">
      <div>Tejas</div>
      <div>
        <Link to={"/"} className={activePageClass("/")}>
          Home
        </Link>
        <Link to={"/about"} className={activePageClass("/about")}>
          About
        </Link>
        <Link to={"/tools"} className={activePageClass("/tools")}>
          Tools
        </Link>
        <Link to={"/projects"} className={activePageClass("/projects")}>
          Projects
        </Link>
        <Link to={"/contact"} className={activePageClass("/contact")}>
          Contact
        </Link>
      </div>
      <div></div>
    </header>
  );
};

export default Navbar;
