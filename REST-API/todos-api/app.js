const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

require("dotenv").config();

// import routes
const todosRoutes = require("./routes/todosRoutes");
const authRoutes = require("./routes/authRoutes");
// create express app

const app = express();

// middlwares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// routes

app.use("/api/todos", todosRoutes);
app.use("/api/auth", authRoutes);

// connect to the database and lestining to requests
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;
mongoose.connect(DB_URL).then(() => {
  console.log("connected to the database");
  app.listen(PORT, () => {
    console.log("Server is listining is port : " + PORT);
  });
});
