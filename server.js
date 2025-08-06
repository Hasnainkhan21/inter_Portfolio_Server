const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const connectDB = require('./Configurations/db');
const UserRoutes = require('./Router/portfolioRoutes');

const app = express();
connectDB();

const allowedOrigins = ['https://intern-portfolio-rouge.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('❌ Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v0/users', UserRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
