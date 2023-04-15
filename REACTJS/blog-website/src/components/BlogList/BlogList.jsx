import Blog from "../Blog/Blog";
import useFetch from "../../hooks/useFetch";
import style from "./style.module.css";

const BlogList = () => {
  const { blogs, isLoading, error } = useFetch("http://localhost:8001/blogs");

  if (isLoading) return <p>is loading ...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className={style.blogs}>
      {blogs && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </div>
  );
};

export default BlogList;
