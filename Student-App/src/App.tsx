import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import StudForm from "./components/StudForm";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="w-full" style={{backgroundColor: theme === "light" ? "bg-white" : "bg-gray-950"}}>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <StudForm theme={theme} />
      </div>
    </>
  )
}

export default App
