const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const connectDB = require('./Configurations/db');
const UserRoutes = require('./Router/portfolioRoutes');

const app = express();

// Connect to Database
connectDB();

// CORS Configuration (simplified)
app.use(cors({
  origin: ['https://intern-portfolio-rouge.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Portfolio Backend is Running');
});

// API Routes
app.use('/api/v0/users', UserRoutes);

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

// Start server
const PORT = process.env.PORT || 3081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});