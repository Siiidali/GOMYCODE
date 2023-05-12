// import libriries
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import * as dotenv from "dotenv";

// dotenv config
dotenv.config();

// import routes
import budgetRoutes from "./routes/budgetRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// create express app
const app = express();

// middlwares

app.use(express.json());
app.use(morgan("dev"));

// defining routes
app.use("/api/budget", budgetRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/auth", authRoutes);

// cconsole.log(db_url);onnect to the database
const db_url = process.env.DB_URL;
const PORT = process.env.PORT;

mongoose.connect(db_url).then(() => {
  console.log("connected to the database");
  app.listen(PORT, () => {
    console.log("server listening to requests on port : " + PORT);
  });
});
