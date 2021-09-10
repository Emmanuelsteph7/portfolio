import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

const ThemeToggle = () => {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    window.addEventListener("storage", handleStorage);
    const metaTag = document.querySelector(".meta-theme");

    if (mode === "dark") {
      metaTag.setAttribute("content", "#2b2c2f");
    } else {
      metaTag.setAttribute("content", "#2f0a0d");
    }

    return () => window.removeEventListener("storage", handleStorage);
  }, [mode]);

  const handleStorage = () => {
    const modeState = localStorage.getItem("mode");

    if (modeState) {
      setMode(modeState);
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);
  return (
    <div
      style={toggleStyle}
      className="themeToggle"
      onClick={() => setMode((mode) => (mode === "light" ? "dark" : "light"))}
    >
      {mode === "dark" ? <BsSun /> : <FaMoon />}
    </div>
  );
};

const toggleStyle = {
  position: "fixed",
  bottom: "20px",
  right: "15px",
  zIndex: "3",
  cursor: "pointer",
};

export default ThemeToggle;
