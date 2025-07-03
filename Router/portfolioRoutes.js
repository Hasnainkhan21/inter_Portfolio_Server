const express = require('express');
const router = express.Router();
const { savePortfolioData } = require('../Data/PostData');
const { getData } = require('../Data/GetData');

// POST /postuser - Save portfolio data to the database
router.post('/postdata', savePortfolioData)
router.get('/getdata', getData);

module.exports = router;