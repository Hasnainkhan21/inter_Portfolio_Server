const sender = require('../Models/formSchema')

exports.postMessage = async (req, res) => {
    try{
        const { name, email, message } = req.body;

        // Create a new message instance
        const newMessage = new sender({
            name,
            email,
            message
        });

        // Save the message to the database
        await newMessage.save();

        res.status(201).json({ message: 'Message sent successfully' });

    }catch(error){
        res.status(500).json({error: 'Failed to send message', details: error.message});
    }
}

//get all messages
exports.getMessages = async (req, res) => {
    try {
        const messages = await sender.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages', details: error.message });
    }
}