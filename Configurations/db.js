const DB_URI = 'mongodb+srv://Admin:Admin12345@cluster0.rt61viy.mongodb.net/portfolioDB';

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('✅ Connected to MongoDB successfully');
    } catch (error) {
        console.error('❌ Error connecting to MongoDB:', error);
    }
};

module.exports = connectDB;
