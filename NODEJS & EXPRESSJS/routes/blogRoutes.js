const express = require("express");
const Blog = require("../models/blogModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.render("index", { title: "Home", blogs });
});

router.post("/", async (req, res) => {
  const blog = req.body;
  try {
    const createdBlog = await Blog.create(blog);
    res.redirect("/");
  } catch (error) {
    res.status(404).render("404", { title: "404" });
  }
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create new Blog" });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedBlog = await Blog.findByIdAndDelete(id);
  res.json({
    redirect: "/blogs",
  });
});
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("detaills", { title: "Blog Detaills", blog: blog });
});

module.exports = router;
