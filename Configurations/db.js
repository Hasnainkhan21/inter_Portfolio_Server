const mongoose = require('mongoose');
require('dotenv').config();
const DB_URI = process.env.MONGO_URI
const connectDB = async () => {
    try { 
        await mongoose.connect(DB_URI);
        console.log('✅ Connected to MongoDB successfully yes successfully');
    } catch (error) {
        console.error('❌ Error connecting to MongoDB:', error);
    }
};

module.exports = connectDB;
