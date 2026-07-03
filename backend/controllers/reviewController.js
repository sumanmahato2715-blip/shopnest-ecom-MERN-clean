const Review = require('../models/Review');
const Product = require('../models/Product');

// Add Review
const addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const alreadyReviewed = await Review.findOne({
      productId: req.params.id,
      userId: req.user._id,
    });

    if (alreadyReviewed) {
      return res.status(400).json({
        message: 'You have already reviewed this product',
      });
    }

    const review = await Review.create({
      productId: req.params.id,
      userId: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    });

    const reviews = await Review.find({
      productId: req.params.id,
    });

    product.ratings =
      reviews.reduce((acc, item) => acc + item.rating, 0) /
      reviews.length;

    product.numReviews = reviews.length;

    await product.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      productId: req.params.id,
    }).sort({
      createdAt: -1,
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addReview,
  getReviews,
};