import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("darkMode");
    if (theme === null) {
      localStorage.setItem("darkMode", "false");
    } else {
      setIsDarkMode(theme === "true");
    }
  }, []);

  const handleThemeSwitch = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("darkMode", `${newTheme}`);
      return newTheme;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={`${isDarkMode ? "dark" : undefined} `}>
          <main className=" flex justify-center flex-col polka">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    isDarkMode={isDarkMode}
                    handleThemeSwitch={handleThemeSwitch}
                  />
                }
              />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
