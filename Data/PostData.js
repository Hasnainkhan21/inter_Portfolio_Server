const portfolioData = require('../Data/portfolioData');
const User = require('../Models/User');
const Project = require('../Models/projectsModel');

exports.savePortfolioData = async (req, res) => {
    try {
        // 🧹 Clear previous data
        await User.deleteMany({});
        await Project.deleteMany({});

        //Save user
        const user = new User({
            name: portfolioData.name,
            email: portfolioData.email,
            phone: portfolioData.phone,
            role: portfolioData.role,
            skills: portfolioData.skills,
            profileImage: portfolioData.profileImage,
            coverImage: portfolioData.coverImage
        });
        await user.save();

        //Save all projects
        const formattedProjects = portfolioData.projects.map(project => ({
            title: project.title,
            description: project.description,
            link: project.link || '',
            technologies: project.technologies || [],
            image: project.image || ''
        }));

        await Project.insertMany(formattedProjects);

        res.status(201).json({ message: 'All portfolio data saved successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save portfolio data.', details: error.message });
    }
};
