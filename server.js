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
      "http://localhost:3001" // dev frontend
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
app.post("/postdata", (req, res) => {
  res.json({ success: true, message: "Data posted to backend!", data: req.body });
});

app.post("/postmessage", (req, res) => {
  res.json({ success: true, message: "Message posted to backend!", data: req.body });
});

app.get("/getmessages", (req, res) => {
  res.json({ success: true, message: "Messages coming from backend!" });
});


// ✅ Export app for Vercel (NO app.listen here)
module.exports = app;
