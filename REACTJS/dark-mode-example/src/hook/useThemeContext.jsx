import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) return new Error("context didn't work");
  return context;
};
