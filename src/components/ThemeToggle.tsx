import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Set theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDark(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);

    if (newTheme === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: isDark ? "#2d3748" : "#e2e8f0",
        color: isDark ? "white" : "black",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        transition: "background-color 0.3s, color 0.3s"
      }}
    >
      {isDark ? <FaSun color="yellow" /> : <FaMoon color="#2d3748" />}
    </button>
  );
};

export default ThemeToggle;
