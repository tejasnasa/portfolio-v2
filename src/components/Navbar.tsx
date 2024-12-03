import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const loc = useLocation().pathname;
  const activePageClass = (path: string) =>
    loc === path ? "border-[1px] border-gray-300 dark:border-gray-700" : undefined;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-transparent backdrop-filter backdrop-blur-sm fixed w-full z-40 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h2 className="playwrite-hr-lijeva text-sky-800 text-[25px] lg:text-[25px] font-bold">
          Tejas
        </h2>
        <div
          className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          onClick={toggleMenu}
        >
          <div></div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:p-1 mt-2 rounded-[20px] md:rounded-[30px] md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 border-[2px] border-gray-300 dark:border-gray-700 text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-blue-600 playwrite-hr-lijeva">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Tools", to: "/tools" },
              { label: "Projects", to: "/projects" },
              { label: "Contact", to: "/contact" },
            ].map(({ label, to }) => (
              <Link
                to={to}
                key={label}
                className={`rounded-full text-center px-4 p-1 transition duration-300 ease-in-out click-animation ${activePageClass(
                  to
                )}`}
                onClick={closeMenu}
              >
                <li>{label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
