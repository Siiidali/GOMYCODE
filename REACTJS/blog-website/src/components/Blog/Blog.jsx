import { Link } from "react-router-dom";
import style from "./style.module.css";

const Blog = ({ blog }) => {
  return (
    <Link to={`${blog.id}`}>
      <div className={style.blog}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
      </div>
    </Link>
  );
};

export default Blog;
