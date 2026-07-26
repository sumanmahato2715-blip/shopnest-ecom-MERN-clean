import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalProducts: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (isAdmin !== "true") {
      navigate("/admin-login");
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await fetch(
          "https://shopnest-ecom-mern-clean-production.up.railway.app/api/analytics"
        );

        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchStats();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  const cardStyle = {
    padding: "25px",
    background: "#18181b",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "12px",
    textAlign: "center",
  };

  const numberStyle = {
    fontSize: "2rem",
    color: "#f97316",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Admin Dashboard</h2>

        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>

      <h3>Welcome Admin 👋</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Orders</h3>
          <div style={numberStyle}>{stats.totalOrders}</div>
        </div>

        <div style={cardStyle}>
          <h3>Total Products</h3>
          <div style={numberStyle}>{stats.totalProducts}</div>
        </div>

        <div style={cardStyle}>
          <h3>Total Users</h3>
          <div style={numberStyle}>{stats.totalUsers}</div>
        </div>

        <div style={cardStyle}>
          <h3>Total Revenue</h3>
          <div style={numberStyle}>₹{stats.totalRevenue}</div>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <button
          className="btn"
          onClick={() => navigate("/admin/add-product")}
        >
          ➕ Add Product
        </button>

        <button
          className="btn"
          onClick={() => navigate("/admin/products")}
        >
          📦 Products
        </button>

        <button
          className="btn"
          onClick={() => navigate("/admin/orders")}
        >
          📋 Orders
        </button>

        <button
          className="btn"
          onClick={() => navigate("/admin/users")}
        >
          👤 Users
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;