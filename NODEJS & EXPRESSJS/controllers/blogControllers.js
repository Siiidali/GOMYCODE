const Blog = require("../models/blogModel");

const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.render("index", { title: "Home", blogs });
};

const getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("detaills", { title: "Blog Detaills", blog: blog });
};

const createBlog = async (req, res) => {
  const blog = req.body;
  try {
    const createdBlog = await Blog.create(blog);
    res.redirect("/");
  } catch (error) {
    res.status(404).render("404", { title: "404" });
  }
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  const deletedBlog = await Blog.findByIdAndDelete(id);
  res.json({
    redirect: "/blogs",
  });
};

module.exports = {
  getBlog,
  getBlogs,
  deleteBlog,
  createBlog,
};
