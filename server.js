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
      "https://intern-portfolio-rouge.vercel.app", // deployed frontend
      "http://localhost:5173", // Vite dev frontend
      "http://localhost:3001" // (optional, if you use this port)
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
app.get("/getdata", (req, res) => {
  res.json({ success: true, message: "Data coming from backend!" });
});


// ✅ Export app for Vercel (NO app.listen here)
module.exports = app;
