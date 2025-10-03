const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const connectDB = require("./Configurations/db");
const UserRoutes = require("./Router/portfolioRoutes");

const app = express();
connectDB();

// ✅ Allow frontend domain + localhost for dev
app.use(
  cors({
    origin: [
      "https://intern-portfolio-rouge.vercel.app", // frontend live
      "http://localhost:5173" // dev frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});

// Routes
app.use("/", UserRoutes);


// Static files
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

// ✅ Export app for Vercel (NO app.listen here)
module.exports = app;
