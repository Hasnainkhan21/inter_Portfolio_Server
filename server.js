const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./Configurations/db');
const UserRoutes = require('./Router/portfolioRoutes');
const path = require('path');

connectDB();
const allowedOrigins = ['https://intern-portfolio-rouge.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use('/api/v0/users', UserRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

// ✅ Use dynamic port for production
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
