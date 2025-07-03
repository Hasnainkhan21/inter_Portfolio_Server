const User = require('../Models/User');
const Project = require('../Models/projectsModel');

exports.getData = async (req, res) => {
    try {
        const user = await User.findOne(); // get the only user
        const projects = await Project.find(); // get all projects
        res.json({ user, projects });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data', details: error.message });
    }
};
