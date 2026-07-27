const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    console.log("========== CREATE PRODUCT ==========");
    console.log("Body:", req.body);
    console.log("File:", req.file);

    const { name, description, price, category, stock } = req.body;

    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);

      console.log("Cloudinary Result:", result);

      imageUrl = result.secure_url;
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
    });

    const createdProduct = await product.save();

    console.log("Product Saved Successfully");

    res.status(201).json(createdProduct);
  } catch (error) {
    console.log("========== PRODUCT ERROR ==========");
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.stock = stock || product.stock;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      product.imageUrl = result.secure_url;
    }

    const updatedProduct = await product.save();

    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.json({
      message: "Product removed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};