import { useThemeContext } from "./hook/useThemeContext";
const NavBar = () => {
  const { theme, setTheme } = useThemeContext();

  const themeChanger = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={theme === "light" ? "navBar light" : "navBar dark"}>
      <h1>Dark Mode Example</h1>
      <button onClick={themeChanger}>Toggle</button>
    </div>
  );
};

export default NavBar;
