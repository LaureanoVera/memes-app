import { useState } from "react";
import MemesRouter from "./routers/MemesRouter";

const darkTheme = {
  bg: "bg-dark",
  text: "text-light",
  nav: "navbar-dark",
  btn: "btn-outline-light",
};
const lightTheme = {
  bg: "bg-light",
  text: "text-dark",
  nav: "navbar-light",
  btn: "btn-outline-dark",
};

const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  const handleTheme = (evt) => {
    evt.preventDefault();

    if (theme.bg === "bg-dark") {
      setTheme(lightTheme);
      return;
    }
    setTheme(darkTheme);
    return;
  };

  return (
      <div>
        <MemesRouter handleTheme={handleTheme} theme={theme} />
      </div>
  );
};

export default App;
