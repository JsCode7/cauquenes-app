import React, { useEffect, useState } from "react";
import { switchTheme } from "../utils/switchTheme";

export default function SwitchDarkMode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      if (theme === "dark") {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    switchTheme(theme);
  };

  return (
    <button
      className="w-16 h-10 rounded-full pl-[0.6rem] bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={handleChangeTheme}
    >
      <div
        id="switch-toggle"
        className="w-8 h-8 relative rounded-full transition duration-500 transform bg-yellow-500  dark:bg-[#1f2937] p-2 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
    </button>
  );
}
