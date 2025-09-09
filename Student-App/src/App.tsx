import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import LearnerForm from "./components/StudForm";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
     <div
      className="w-full"
      style={{
        backgroundColor: theme === "light" ? "#fef3c7" : "#1f2937",
        minHeight: "100vh"
      }}
    >
      <NavBar theme={theme} toggleTheme={toggleTheme} />

      <div className="mt-16"> 
        <LearnerForm theme={theme} />
      </div>
    </div>
  );
}

export default App;
