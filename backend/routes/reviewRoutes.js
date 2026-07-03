const express = require('express');
const {
  addReview,
  getReviews,
} = require('../controllers/reviewController');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all reviews of a product
router.get('/:id', getReviews);

// Add a review (Logged-in user only)
router.post('/:id', protect, addReview);

module.exports = router;