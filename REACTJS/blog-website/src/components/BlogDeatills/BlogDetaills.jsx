import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import style from "./style.module.css";

const BlogDetaills = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    blogs: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8001/blogs/${id}`);

  const deleteClick = () => {
    fetch(`http://localhost:8001/blogs/${id}`, {
      method: "DELETE",
    }).then((res) => {
      navigate("/");
    });
  };

  if (isLoading)
    return <p style={{ maxWidth: 600, margin: "0 auto" }}>Is Loading ...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div className={style.blog_detaills}>
      <h1>{blog && blog.title}</h1>
      <p>{blog && blog.body}</p>
      <br />
      <button onClick={deleteClick}>Delete</button>
    </div>
  );
};

export default BlogDetaills;
