// routes/searchRoutes.js
const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// Search for blog titles based on a letter
router.get('/search/:letter', async (req, res) => {
  try {
    const results = await searchController.searchBlogTitles(req.params.letter);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Implement other search-related routes similarly

module.exports = router;
