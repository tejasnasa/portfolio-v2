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
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);

  const handleThemeChange = () => {
    setTheme((theme) => {
      if (theme === "light") {
        return "dark";
      } else return "light";
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loading />
      ) : (
        <main className={theme === "dark" ? "dark" : undefined}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home onClick={handleThemeChange} />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      )}
    </BrowserRouter>
  );
};

export default App;
