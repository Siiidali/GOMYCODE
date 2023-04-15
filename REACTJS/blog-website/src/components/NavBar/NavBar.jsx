import style from "./style.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.nav_bar}>
      <h2 className={style.logo_text}>The Dojo Blog</h2>
      <div className={style.links}>
        <Link className={style.link1} to="/">
          Home
        </Link>
        <Link className={style.link2} to="add-blog">
          Add Blog
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
