import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    setTheme((theme) => {
      if (theme === "light") {
        return "dark";
      } else return "light";
    });
  };

  return (
    <BrowserRouter>
      <main className={theme === "dark" ? "dark" : undefined}>
        <Routes>
          <Route
            path="/"
            element={<Home onChangeTheme={handleThemeChange} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
