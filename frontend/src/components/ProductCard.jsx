import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";
import { toast } from "react-toastify";
import "../styles/product.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        qty: 1,
      })
    );

    toast.success(`${product.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const handleWishlist = () => {
    dispatch(
      addToWishlist({
        productId: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
      })
    );

    toast.success(`${product.name} added to Wishlist ❤️`, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  return (
    <div className="product-card">
      <div className="discount-badge">20% OFF</div>

      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="rating">
          ⭐⭐⭐⭐☆
          <span>(4.8)</span>
        </div>

        <p className="price">₹{product.price}</p>

        <p className="delivery">🚚 Free Delivery</p>

        <button
          className="btn"
          onClick={handleWishlist}
          style={{
            marginBottom: "12px",
            background: "#e11d48",
            border: "none",
            cursor: "pointer",
          }}
        >
          ❤️ Add to Wishlist
        </button>

        <button
          className="btn"
          onClick={handleAddToCart}
          style={{
            marginBottom: "12px",
            border: "none",
            cursor: "pointer",
          }}
        >
          🛒 Add to Cart
        </button>

        <Link
          to={`/product/${product._id}`}
          className="btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;