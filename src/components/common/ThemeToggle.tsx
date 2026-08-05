import React from "react";
import { useTheme } from "./useTheme";

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xl transition hover:scale-110"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;