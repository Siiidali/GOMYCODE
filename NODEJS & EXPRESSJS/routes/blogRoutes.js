const express = require("express");
const blogControllers = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", blogControllers.getBlogs);

router.post("/", blogControllers.createBlog);

router.get("/create", (req, res) => {
  res.render("create", { title: "Create new Blog" });
});

router.delete("/:id", blogControllers.deleteBlog);
router.get("/:id", blogControllers.getBlog);

module.exports = router;
