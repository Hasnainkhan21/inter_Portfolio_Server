const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./Configurations/db');
const UserRoutes = require('./Router/portfolioRoutes');

const app = express();
connectDB();

// ✅ Allowed frontend origins
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

// ✅ Routes
app.use('/api/v0/users', UserRoutes);

// ✅ Serve static files like images
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

// ✅ Handle undefined routes (optional)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ✅ Start server on dynamic port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
