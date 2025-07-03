const express = require('express');
const app = express();
const connectDB = require('./Configurations/db');
const UserRoutes = require('./Router/portfolioRoutes');

connectDB();
app.use(express.json());
app.use('/api/v0/users', UserRoutes);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})
