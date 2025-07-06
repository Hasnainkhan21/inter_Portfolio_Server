const express = require('express');
const router = express.Router();
const { savePortfolioData } = require('../Data/PostData');
const { getData } = require('../Data/GetData');
const {postMessage , getMessages} = require('../Data/formData')

// POST /postuser - Save portfolio data to the database
router.post('/postdata', savePortfolioData)
router.get('/getdata', getData);
router.post('/postmessage', postMessage);
router.get('/getmessages', getMessages);

module.exports = router;