import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import Projects from "./pages/Projects";

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
      <main className={theme === "dark" ? "dark" : undefined}>
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Home onChangeTheme={handleThemeChange} />}
            />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </main>
    </BrowserRouter>
  );
};

export default App;
