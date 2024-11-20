// App.jsx

import { Button } from "./components/Button";
import { ThemeProvider } from "./context/ThemeContext";

export const App = () => {
  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
  );
};