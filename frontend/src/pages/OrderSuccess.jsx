import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const orderId = "SN" + Date.now();

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "40px",
        background: "#18181b",
        borderRadius: "15px",
        textAlign: "center",
        color: "white",
        boxShadow: "0 0 15px rgba(0,0,0,0.4)"
      }}
    >
      <div style={{ fontSize: "70px" }}>✅</div>

      <h1 style={{ color: "#22c55e" }}>
        Your Order Has Been Placed!
      </h1>

      <p style={{ fontSize: "18px", color: "#ccc" }}>
        Thank you for shopping with <b>ShopNest</b>.
      </p>

      <hr style={{ margin: "30px 0", borderColor: "#333" }} />

      <h3>Payment Status</h3>
      <p style={{ color: "#22c55e", fontWeight: "bold" }}>
        Payment Successful
      </p>

      <h3>Order ID</h3>
      <p>{orderId}</p>

      <h3>Estimated Delivery</h3>
      <p>3 - 5 Business Days</p>

      <div style={{ marginTop: "40px" }}>
        <Link to="/orders">
          <button
            style={{
              padding: "12px 25px",
              marginRight: "15px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            View My Orders
          </button>
        </Link>

        <Link to="/shop">
          <button
            style={{
              padding: "12px 25px",
              background: "#f97316",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;