const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

const app = express();

// set up ejs as the view engine
app.set("view engine", "ejs");

// middlewares & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log("this is a middlware  : ");
  console.log("Request methode : " + req.method);
  console.log("Request url : " + req.url);
  console.log("Request host : " + req.hostname);
  next();
});

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// a middlware
// app.use((req, res, next) => {
//   console.log("second middlware");
//   next();
// });

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;

mongoose.connect(DB_URL).then(() => {
  console.log("connected to the database");
  app.listen(PORT, () => {
    console.log("server is litsining :");
  });
});
