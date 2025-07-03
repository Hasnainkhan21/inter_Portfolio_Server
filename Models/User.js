const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    role: String,
    skills: [String],
})

module.exports= mongoose.model('User',portfolioSchema);


