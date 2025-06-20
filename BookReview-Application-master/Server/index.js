const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDatabase = require("./dbConnection");
const authRoutes = require("./src/routes/authRoute");
const bookRoutes = require("./src/routes/bookRoute");
const reviewRoutes = require("./src/routes/reviewRoutes");

dotenv.config();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/book", bookRoutes);
app.use("/review", reviewRoutes);

app.listen(process.env.PORT, () => {
  connectToDatabase();
  console.log("app is running on port " + process.env.PORT);
});
