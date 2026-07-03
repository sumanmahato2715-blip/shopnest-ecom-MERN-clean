const express = require('express');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const {
  addReview,
  getReviews,
} = require('../controllers/reviewController');

const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

// Products
router
  .route('/')
  .get(getProducts)
  .post(protect, admin, upload.single('image'), createProduct);

// Single Product
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, upload.single('image'), updateProduct)
  .delete(protect, admin, deleteProduct);

// Reviews
router.get('/:id/reviews', getReviews);
router.post('/:id/reviews', protect, addReview);

module.exports = router;