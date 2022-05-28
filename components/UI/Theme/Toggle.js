import { useEffect, useState } from "react";
import { useTheme } from "./";

export const Toggle = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      {...props}
    >
      Set {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default Toggle;
