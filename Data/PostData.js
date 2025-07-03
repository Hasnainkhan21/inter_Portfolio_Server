const portfolioData = require('../Data/portfolioData');
const User = require('../Models/User');
const Project = require('../Models/projectsModel');

exports.savePortfolioData = async (req, res) => {
    try {
        // 🧹 Clear previous data
        await User.deleteMany({});
        await Project.deleteMany({});

        // 👤 Save user data
        const user = new User({
            name: portfolioData.name,
            email: portfolioData.email,
            phone: portfolioData.phone,
            role: portfolioData.role,
            skills: portfolioData.skills
        });
        await user.save();

        // 💼 Save projects
        await Project.insertMany(portfolioData.projects);

        res.status(201).json({ message: 'All portfolio data saved successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save portfolio data.', details: error.message });
    }
};
