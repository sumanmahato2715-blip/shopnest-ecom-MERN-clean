import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const orders = [
    {
      id: "ORD1001",
      date: "03 July 2026",
      total: 449.99,
      status: "Delivered",
    },
    {
      id: "ORD1002",
      date: "02 July 2026",
      total: 150,
      status: "Processing",
    },
  ];

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
        📦 My Orders
      </h1>

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            background: "#18181b",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ color: "#fff" }}>
              Order #{order.id}
            </h2>

            <p style={{ color: "#aaa" }}>
              Date: {order.date}
            </p>

            <h3 style={{ color: "#f97316" }}>
              ₹{order.total}
            </h3>

            <p
              style={{
                color:
                  order.status === "Delivered"
                    ? "#22c55e"
                    : "#facc15",
              }}
            >
              {order.status}
            </p>
          </div>

          <Link
            to="/shop"
            style={{
              background: "#f97316",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Shop Again
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Orders;