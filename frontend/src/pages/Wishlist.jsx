import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const removeHandler = (id) => {
    dispatch(removeFromWishlist(id));

    toast.success("Removed from Wishlist ❤️", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const addCartHandler = (item) => {
    dispatch(
      addToCart({
        productId: item.productId,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        qty: 1,
      })
    );

    toast.success("Added to Cart 🛒", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#fff",
          marginBottom: "30px",
        }}
      >
        ❤️ My Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <h2 style={{ color: "#999" }}>
          Your wishlist is empty.
        </h2>
      ) : (
        wishlistItems.map((item) => (
          <div
            key={item.productId}
            style={{
              display: "flex",
              alignItems: "center",
              background: "#18181b",
              marginBottom: "20px",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <div
              style={{
                marginLeft: "25px",
                flex: 1,
              }}
            >
              <h2 style={{ color: "#fff" }}>{item.name}</h2>

              <h3 style={{ color: "#f97316" }}>
                ₹{item.price}
              </h3>
            </div>

            <button
              onClick={() => addCartHandler(item)}
              style={{
                background: "#f97316",
                color: "#fff",
                border: "none",
                padding: "12px 18px",
                borderRadius: "8px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              🛒 Add to Cart
            </button>

            <button
              onClick={() => removeHandler(item.productId)}
              style={{
                background: "#ef4444",
                color: "#fff",
                border: "none",
                padding: "12px 18px",
                borderRadius: "8px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Remove
            </button>

            <Link
              to={`/product/${item.productId}`}
              style={{
                background: "#22c55e",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              View
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;