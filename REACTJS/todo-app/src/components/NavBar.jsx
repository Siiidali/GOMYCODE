import SwitchToDarkIcon from "../assets/images/icon-moon.svg";
import SwitchToLightIcon from "../assets/images/icon-sun.svg";

const NavBar = ({ themeLight, setThemeLight }) => {
  const switchThemeIcon = themeLight ? SwitchToDarkIcon : SwitchToLightIcon;

  const changeTheme = () => {
    setThemeLight(!themeLight);
  };

  return (
    <header>
      <h1>TODO</h1>
      <button className="btn switch-theme-btn" onClick={changeTheme}>
        <img src={switchThemeIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};

export default NavBar;
