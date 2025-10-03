const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const connectDB = require('./Configurations/db');
const UserRoutes = require('./Router/portfolioRoutes');

const app = express();
connectDB();

app.use(cors({
  origin: [
    'https://intern-portfolio-rouge.vercel.app',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ status: 'API is running' });
});

app.use('/', UserRoutes);  
// Static files
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

const PORT = process.env.PORT || 3081;
export default app;