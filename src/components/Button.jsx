// Button.jsx

import { useTheme } from "../context/ThemeContext";

export const Button = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`background-${theme}`}>
      <button onClick={toggleTheme}>
        Toggle theme
      </button>
    </div>
  );
};
